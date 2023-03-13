import scrapy
import sys
from bs4 import BeautifulSoup
import json

class PriceHistorySpider(scrapy.Spider):
    name = 'price-history'
    allowed_domains = ["rightmove.co.uk"]

    def __init__(self, *args, **kwargs):
        # self.params = json.loads(sys.argv[1])
        # self.url = 'https://www.rightmove.co.uk/house-prices/' + \
        #            str(self.params['address']).lower() + '.html'

        self.url = 'https://www.rightmove.co.uk/house-prices/london.html'
        super().__init__(*args, **kwargs)

    def start_requests(self):
        yield scrapy.http.Request(self.url, method='GET', headers=self.headers)

    def parse(self, response):
        soup = BeautifulSoup(response.body, 'html.parser')

        # with open('price-history-test.html', 'w') as output:
        #     output.write(str(soup.contents))

        # price_history_output = []
        price_history_data = json.loads(soup.find_all('script').__getitem__(3).text.strip('window.__PRELOADED_STATE__ = '))['results']
        title = price_history_data['title']
        properties = price_history_data['properties']
        description = price_history_data['metaTagDescription']
        blurb = price_history_data['sidebar']

        print("HERE", blurb)
        # property_data = price_history_data['price_history_data']
        # print("PROPERTY DATA: ", title)
        # print("PROPERTY DATA: ", properties)
        price_history = [{
            "title": title,
            "description": description
        }]


        # Add model for Price_History
        # with open('price-history-result.json', 'w', encoding='utf-8') as output:
        #     output.write(json.dumps(price_history))

            # for prop in property_output:
            #     for p in prop:
            #         output.write('\n' + str(p))
            #     output.write('\n\n')

        return None
