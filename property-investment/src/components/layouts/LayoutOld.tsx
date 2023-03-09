import { useEffect, useState } from 'react';
import StartPage from '../StartPage';
import SearchMenu from "../SearchMenu";
import SearchResults from '../SearchResults/SearchResults';
import PriceInformationView from "../custom_old/PriceInformationView/PriceInformationView";
// import SavedResults from "../SavedResults";
import { PriceHistoryData, PropertyItem, RentPriceData } from '../../utils/interfaces';
import Condition
from '../general/Condition';

const Layout = (): JSX.Element => {
  const [showStartPage, setShowStartPage] = useState(true);
  const [results, setResults] = useState<PropertyItem[] | undefined>([]);
  const [rentalPrices, setRentalPrices] = useState<RentPriceData>();
  const [priceHistory, setPriceHistory] = useState<PriceHistoryData>();

  useEffect(() => {}, [])

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Condition 
        condition={!showStartPage}
        conditionalElement={
          <>
            <SearchMenu 
              sendResults={(results?: PropertyItem[]): void => {
                setResults(results)
                setShowStartPage(false)
              }}
              sendRentalPrices={(results: RentPriceData): void => {
                setRentalPrices(results)
              }}
              sendPriceHistory={(results: PriceHistoryData): void => {
                setPriceHistory(results)
              }}
            />
            <StartPage />
          </>
        }
      >
          <div style={{ 
            display: 'flex', 
            flexDirection: 'row', 
            height: '100vh',
            overflow: 'scroll',
            paddingBottom: 100
          }}>
            <SearchMenu 
              initialMenuOpen={false} 
              sendResults={(results?: PropertyItem[]): void => setResults(results)}
              sendRentalPrices={(results: RentPriceData): void => setRentalPrices(results)}
              sendPriceHistory={(results: PriceHistoryData): void => setPriceHistory(results)}
            />
            <SearchResults results={results} />
            {/* <SavedResults /> */}
          </div>
          <PriceInformationView results={rentalPrices} historyResults={priceHistory} />
      </Condition>
    </div>
  );
};

export default Layout;