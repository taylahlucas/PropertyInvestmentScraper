import os, sys, time
from scrapy.utils.log import configure_logging
from scrapy.crawler import CrawlerProcess
from scrapy.settings import Settings
import scrapers.settings as my_settings
from scrapers.spiders.price_history_spider import PriceHistorySpider


def main():
    configure_logging()
    settings = Settings()
    settings.setmodule(my_settings)
    process = CrawlerProcess(settings)

    open('price-history-result.json', 'w').close()
    process.crawl(PriceHistorySpider)
    process.start()
    time.sleep(5)

    with open('price-history-result.json'):
        while os.path.getsize('price-history-result.json') == 0:
            time.sleep(2)
        print('Price history spider finished')
        process.stop()
        sys.stdout.flush()


if __name__ == '__main__':
    main()
