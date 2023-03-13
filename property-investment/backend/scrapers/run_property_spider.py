import os, sys, time
from scrapy.utils.log import configure_logging
from scrapy.crawler import CrawlerProcess
from scrapy.settings import Settings
import scrapers.settings as my_settings
from scrapers.spiders.property_spider import PropertySpider
from scrapers.get_user_agents import get_ua


def main():
    configure_logging()
    settings = Settings()
    settings.setmodule(my_settings)
    process = CrawlerProcess(settings)

    open('properties-result.json', 'w').close()
    process.crawl(PropertySpider)
    process.start()
    time.sleep(5)

    with open('properties-result.json'):
        while os.path.getsize('properties-result.json') == 0:
            time.sleep(2)
        print('Properties spider finished')
        process.stop()
        sys.stdout.flush()


if __name__ == '__main__':
    main()
