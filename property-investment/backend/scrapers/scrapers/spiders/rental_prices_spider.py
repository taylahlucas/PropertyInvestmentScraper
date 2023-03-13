import sys
import json
import scrapy
from bs4 import BeautifulSoup
import datetime
from ..get_user_agents import get_ua

class RentalPricesSpider(scrapy.Spider):
    name = 'rental-prices'
    allowed_domains = ["onthemarket.com"]
    rental_items = []
    property_counts = []
    headers = {
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
        "Accept-Language": "en",
        "User-Agent": get_ua()
    }

    def __init__(self, *args, **kwargs):
        self.params = json.loads(sys.argv[1])
        self.url = 'https://www.onthemarket.com/to-rent/' \
           + str(self.params['noBeds']) \
           + '-bed-property/' + str(self.params['address']).lower() + \
           '?view=grid'

        super().__init__(*args, **kwargs)

    def start_requests(self):
        yield scrapy.http.Request(self.url, method='GET', headers=self.headers)

    def parse(self, response):
        soup = BeautifulSoup(response.body, 'html.parser')
        cards = soup.find_all('li', {'class': 'otm-PropertyCard'})

        for card in cards:
            property_id = card.find_next('div').attrs.get('id').strip('result-')
            # Get property dates
            property_agent = card.find_next('div', {'class', 'otm-PropertyCardAgent'})
            days_otm = property_agent.find_next('div', {'class', 'days-otm'}).text

            # Get property metrics
            property_info = card.find_all('div', {'class': 'otm-PropertyCardInfo'})
            for prop in property_info:
                description = prop.find_next('span', {'class': 'title'}).find_next('a').text
                property_type = ''
                if description.__contains__('bedroom '):
                    property_type = description.split('bedroom ')[1].split(' to')[0]
                elif description.__contains__('studio '):
                    property_type = 'Studio'

                price = prop.find_next('div', {'class': 'mb-0 text-lg font-bold text-denim price'}).text
                bed_bath_count = prop.find_next('div', {'class': 'otm-BedBathCount flex items-center'}).find_all('div')
                no_beds = 0
                no_baths = 0
                if len(bed_bath_count) > 0:
                    no_beds = bed_bath_count[0].text
                    if len(bed_bath_count) >= 1:
                        no_baths = bed_bath_count[1].text

                if no_baths == '-':
                    no_baths = '0'
                if no_beds == 'Studio':
                    no_beds = '1'

                property_count = {
                    "no_beds": int(no_beds),
                    "no_baths": int(no_baths),
                    "property_type": property_type
                }
                if property_count not in self.property_counts:
                    self.property_counts.append(property_count)

                rental_item = {
                    "property_id": property_id,
                    "price": price.split(' pcm', 1)[0].strip('£').replace(',', ''),
                    "property_type": property_type,
                    "no_beds": int(no_beds),
                    "no_baths": int(no_baths),
                    "days_otm": days_otm
                }
                self.rental_items.append(rental_item)
        self.calculate_results()
    def calculate_results(self):
        average_prices = []

        # Get price lists for bed / bath combinations
        for bed_baths in self.property_counts:
            bed_bath_prices = []
            for item in self.rental_items:
                if item['no_beds'] == bed_baths['no_beds'] and \
                        item['no_baths'] == bed_baths['no_baths'] \
                        and item['property_type'] == bed_baths['property_type']:
                    bed_bath_prices.append(item['price'])

            average_prices.append({
                "bed_baths": bed_baths,
                "prices": bed_bath_prices
            })

        output_object = [{
            "address": self.params['address'],
            "minBeds": self.params['noBeds'],
            "rent_data": average_prices,
            "current_date": str(datetime.datetime.now())
        }]

        with open('rental-prices-result.json', 'w') as result_file:
            result_file.write(json.dumps(output_object))



