import { useState } from 'react';
import Condition from '../../general/Condition';
import MenuOpenBar from '../../general/MenuOpenBar';
import { PriceHistoryData, RentPriceData, RentPriceDataHeader } from '../../../utils/interfaces';
import { calculateAverage } from '../../../data/functions';
import { emptyRentalPriceData, valueArray } from '../../../utils/constants';
import RentalPrices from '../RentalPrices/RentalPrices';
import CustomSelect from '../../general/CustomSelect';
import PriceHistoryView from '../../PriceHistory/PriceHistoryView';

interface PriceInformationViewProps {
  results: RentPriceData | undefined;
  historyResults: PriceHistoryData | undefined;
}

const PriceInformationView = ({ results, historyResults }: PriceInformationViewProps): JSX.Element => {
  const rowData: RentPriceDataHeader[] = []
  const unwrappedResults = !!results ? results : emptyRentalPriceData
  const [menuOpen, setMenuOpen] = useState(false)

  if (unwrappedResults.rent_data.length > 0) {
    // TODO: set options [] no beds, [] type., combine prices and then calculate averages
    unwrappedResults.rent_data.map(item => {
      const prices: number[] = item.prices.map(price => parseInt(price))
      const average = calculateAverage(prices)
      rowData.push({
        no_beds: item.bed_baths.no_beds,
        no_baths: item.bed_baths.no_baths,
        property_type: item.bed_baths.property_type,
        avg: average
      })
    })
  }

  return (
    <Condition condition={unwrappedResults.rent_data.length > 0}>
      <div style={{ 
        width: '100%',
        border: '1px solid black',
        backgroundColor: 'white',
        position: 'fixed',
        borderRadius: 5,
        bottom: 0
      }}>
        <Condition 
          condition={menuOpen}
          conditionalElement={
            <MenuOpenBar 
              backgroundColor={'green'}
              isMenuOpen={menuOpen}
              setMenuOpen={setMenuOpen}
              isVertical={false}
            />
          }>
            <MenuOpenBar 
              backgroundColor={'green'}
              isMenuOpen={menuOpen}
              setMenuOpen={setMenuOpen}
              isVertical={false}
            />
            <div style={{ maxHeight: 250, display: 'flex', flexDirection: 'row' }}>
              <PriceHistoryView results={historyResults} />
              <RentalPrices results={rowData} historyResults={historyResults} />
            </div>
        </Condition>
      </div>
    </Condition>
  );
};

export default PriceInformationView;

{/* // TODO: Create custom select row holder */}
{/* <CustomSelect 
  style={{ marginLeft: -50 }}
  options={valueArray}
  label={'no. of beds'}
  value={1}
  onItemSelect={(value: number) => console.log("HERE")}
/>
<CustomSelect 
  style={{ marginLeft: -50 }}
  options={valueArray}
  label={'property type'}
  value={1}
  onItemSelect={(value: number) => console.log("HERE")}
/> */}