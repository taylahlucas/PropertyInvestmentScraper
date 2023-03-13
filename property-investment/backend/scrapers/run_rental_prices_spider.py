import sys
import time
import os
from scrapy.utils.log import configure_logging
from scrapy.crawler import CrawlerProcess
from scrapy.settings import Settings
import scrapers.settings as my_settings
from scrapers.spiders.rental_prices_spider import RentalPricesSpider


def main():
    configure_logging()
    settings = Settings()
    settings.setmodule(my_settings)
    process = CrawlerProcess(settings)

    open('rental-prices-result.json', 'w').close()
    process.crawl(RentalPricesSpider)
    process.start()
    time.sleep(5)

    with open('rental-prices-result.json'):
        while os.path.getsize('rental-prices-result.json') == 0:
            time.sleep(2)
        print('Rental spider finished')
        process.stop()
        sys.stdout.flush()


if __name__ == '__main__':
    main()
