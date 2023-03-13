import scrapy
import sys
import json
import re
from bs4 import BeautifulSoup
import datetime
from ..get_user_agents import get_ua


class PropertySpider(scrapy.Spider):
    name = 'properties'
    allowed_domains = ["onthemarket.com"]
    property_items_base = []
    property_items = []
    property_ids = []
    hrefs = []
    tenure = ''
    headers = {
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
        "Accept-Language": "en",
        "User-Agent": get_ua()
    }

    def __init__(self, *args, **kwargs):
        self.params = json.loads(sys.argv[1])
        self.url = 'https://www.onthemarket.com/for-sale/' \
                   + str(self.params['noBeds']) \
                   + '-bed-property/' + str(self.params['address']).lower() \
                   + '/?max-price=' + str(self.params['price']) + \
                   '&retirement=false&shared-ownership=false&view=grid'
        super().__init__(*args, **kwargs)

    def start_requests(self):
        yield scrapy.http.Request(self.url, method='GET', headers=self.headers)

    def parse(self, response):
        soup = BeautifulSoup(response.body, 'html.parser')

        # Get details for individual properties
        if str(response.request.url).__contains__('details'):
            contents = soup.find_all('div', {'id': 'app-container'})[0]

            self.get_property_details(soup, contents, response)
        else:
            # Scrape details from search results
            self.scrape_properties(soup)

        for url in self.hrefs:
            yield scrapy.http.Request(url, method='GET')

        # Write scraped results to file
        with open('properties-result.json', 'w') as result_file:
            result_file.write(json.dumps(self.property_items))

    def scrape_properties(self, soup):
        og_cards = soup.find_all('li', {'class': 'otm-PropertyCard'})
        premium = soup.find_all('li', {'class', 'otm-PropertyCard premium'})
        spotlight = soup.find_all('li', {'class', 'otm-PropertyCard spotlight'})
        cards = og_cards + premium + spotlight

        for card in cards:
            property_id = card.find_next('div').attrs.get('id').strip('result-')
            # Get property dates
            property_agent = card.find_next('div', {'class', 'otm-PropertyCardAgent'})
            days_otm = property_agent.find_next('div', {'class', 'days-otm'}).text

            # Get property metrics
            prop = card.find_next('div', {'class': 'otm-PropertyCardInfo'})
            price = prop.find_next('div', {'class': 'mb-0 text-lg font-bold text-denim price'}).text
            description = prop.find_next('span', {'class': 'title'}).find_next('a').text
            address = prop.find_next('span', {'class': 'address'}).find_next('a').text
            features = prop.find_next('ul').find_all('li')
            features_filtered = []
            self.tenure = ''
            for f in features:
                features_filtered.append(f.text)
                self.contains_freehold_or_leasehold(string=f.text)

            if self.tenure != 'Leasehold':
                href = 'https://www.onthemarket.com/details/' + property_id + '/'

                # self.property_ids.append(property_id)
                self.hrefs.append(href)

                bed_bath_count = prop.find_next('div', {'class': 'otm-BedBathCount flex items-center'})\
                    .find_all('div')
                no_beds = 0
                no_baths = 0
                if len(bed_bath_count) > 0:
                    no_beds = bed_bath_count[0].text
                    if len(bed_bath_count) >= 1:
                        no_baths = bed_bath_count[1].text

                # Get images
                media = card.find_next('div', {'class': 'otm-PropertyCardMedia'})
                images = []
                if media is not None:
                    image_data = media.find_all('a', {'class', 'additional-img'})
                    for image in image_data:
                        images.append(image.find_next('div').find_next('img').get('src'))

                property_item = {
                    "property_id": property_id,
                    "price": price,
                    "address": address,
                    "description": description,
                    "features": features_filtered,
                    "no_beds": no_beds,
                    "no_baths": no_baths,
                    "days_otm": days_otm,
                    "images": images,
                    "href": href
                }
                self.property_items_base.append(property_item)

    def get_property_details(self, soup, contents, response):
        extra_details = []
        try:
            flags_data = contents.select('div[class*="otm-Flags"]')[0] \
                .select('div[class*="inline-block"]')
            for flag in flags_data:
                extra_details.append(flag.text)
        except IndexError:
            print("Index out of range")

        try:
            extra_details_data = soup.select('section[class*=otm-IconFeatures]')[0] \
                .select('div[class*=items-center]')
            for extra in extra_details_data:
                extra_details.append(extra.text.replace('\xa0', ' '))
        except IndexError:
            print("Index out of range")

        try:
            property_desc_data = soup.select('section[class*=otm-FeaturesList]')[0] \
                .find_all('li')
            for extra in property_desc_data:
                extra_details.append(extra.text)
        except IndexError:
            print("Index out of range")

        try:
            extra_description = soup.select('div[item-prop*=description]')[0].text.replace(' ', '\n')
        except IndexError:
            print("Index out of range")
            extra_description = ''

        location_data = soup.find_all('script').__getitem__(6).text
        loc_0 = location_data.find('__OTM__.jsonData = ')
        loc_1 = location_data.find('__OTM__.globals = ')
        locations = json.loads(location_data[loc_0:loc_1].strip('__OTM__.jsonData = ').replace(';', ''))

        stations = []
        for station in locations['station']:
            stations.append({
                "name": station['full-name'],
                "location_type": station['location_type'],
                "distance": station['display-distance']
            })
        schools = []
        for school in locations['school']:
            schools.append({
                "name": school['name'],
                "location_type": school['location_type'],
                "distance": school['display-distance']
            })
        current = [prop for prop in self.property_items_base if prop['href'] == response.request.url][0]

        self.match_freehold_or_leasehold(string=extra_description)
        self.match_freehold_or_leasehold(string=''.join(extra_details))

        # Don't return item if tenure is not a Freehold
        if self.params['isFreehold'] == 'true' and self.tenure == 'Leasehold':
            return
        else:
            property_item = {
                "property_id": current['property_id'],
                "price": current['price'],
                "address": current['address'],
                "description": current['description'],
                "features": current['features'],
                "tenure": self.tenure,
                "no_beds": current['no_beds'],
                "no_baths": current['no_baths'],
                "days_otm": current['days_otm'],
                "images": current['images'],
                "href": current['href'],
                "extra_details": extra_details,
                "extra_description": extra_description,
                "stations": stations,
                "schools": schools,
                "current_date": str(datetime.datetime.now()),
            }
            # Append object id to property-results file here?
            self.property_items.append(property_item)
            # yield property_item
    
    def contains_freehold_or_leasehold(self, string):
        if string.lower().__contains__('freehold'):
            self.tenure = 'Freehold'

        if string.lower().__contains__('leasehold'):
            self.tenure = 'Leasehold'

    def match_freehold_or_leasehold(self, string):
        freehold_match = re.search(r'freehold(\w+)', string.lower())
        if freehold_match:
            self.tenure = 'Freehold'

        leasehold_match = re.search(r'leasehold(\w+)', string.lower())
        if leasehold_match:
            self.tenure = 'Leasehold'
