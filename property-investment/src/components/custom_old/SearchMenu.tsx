import { useState } from 'react';
import axios from 'axios';
import { Button, FormGroup, FormControl, TextField, InputAdornment } from "@mui/material";
import Gap from '../general/Gap';
import CustomSelect from '../general/CustomSelect';
import { valueArray } from '../../utils/constants';
import MenuOpenBar from '../general/MenuOpenBar';
import Condition from '../general/Condition';
import CustomSearchBar from '../general/CustomSearchBar/CustomSearchBar';
import { filterSearchData, searchAddressData, convertPriceToNumber, formDataIsValid } from '../../data/functions';
import { SearchFormData, PropertyItem, RentPriceData, PriceHistoryData } from '../../utils/interfaces';

interface SearchMenuProps {
  initialMenuOpen?: boolean;
  sendResults: (results?: PropertyItem[]) => void;
  sendRentalPrices: (results: RentPriceData) => void;
  sendPriceHistory: (results: PriceHistoryData) => void;
}

const SearchMenu = ({ initialMenuOpen = true, sendResults, sendRentalPrices, sendPriceHistory }: SearchMenuProps): JSX.Element => {
  const [menuOpen, setMenuOpen] = useState(initialMenuOpen)
  const [searchValue, setSearchValue] = useState('')
  const searchBarData = filterSearchData(searchValue, searchAddressData)
  const [formData, setFormData] = useState<SearchFormData>({
    noBeds: 1,
    noBaths: 1,
    isFreehold: true,
    isChainfree: true
  });

  async function getProperties() {
    const addressString = formData.address?.substring(0, formData.address.indexOf(',') + 1).replace(',', '');
    axios.get(`http://localhost:5006/properties/${addressString}&${formData.price}&${formData.noBeds}&${formData.noBaths}&${formData.isFreehold}&${formData.isChainfree}`)
      .then(response => {
        var properties: PropertyItem[] = []
        for (let i = 0; i < response.data.length; i++) {
          properties.push(response.data[i] as PropertyItem);
        }
        sendResults(properties);
      });
  }

  async function getRentalPrices() {
    const addressString = formData.address?.substring(0, formData.address.indexOf(',') + 1).replace(',', '');
    axios.get(`http://localhost:5006/rental_prices/${addressString}&${formData.noBeds}`)
      .then(response => {
        sendRentalPrices(response.data[0] as RentPriceData);
      });
  }

  async function getPriceHistory() {
    const addressString = formData.address?.substring(0, formData.address.indexOf(',') + 1).replace(',', '');
    axios.get(`http://localhost:5006/price_history/${addressString}`)
      .then(response => {
        sendPriceHistory(response.data[0] as PriceHistoryData);
      });
  }

  return (
    <>
      <Condition 
        condition={menuOpen}
        conditionalElement={
          <MenuOpenBar 
            isMenuOpen={menuOpen}
            setMenuOpen={setMenuOpen}
          />
        }>
        <div style={{ 
          display: 'flex',
          flexDirection: 'row',
          position: 'fixed',
          backgroundColor: '#D9E3F0',
          padding: 10,
          borderRadius: 5,
          zIndex: 3
        }}>
          <FormGroup
            style={{ 
              justifyContent: 'center', 
              alignItems: 'center',
              marginTop: 60,
              marginLeft: 10,
              marginRight: 10
            }}
          >
            <CustomSearchBar 
              setSearchValue={setSearchValue} 
              options={searchBarData} 
              value={searchValue}
              onItemSelect={(value: string) => {
                setFormData({
                  ...formData,
                  address: value
                })
                setSearchValue(value)
              }}
            />
            <Gap height={50} />
            <TextField
              size='small'
              type='number'
              placeholder={'price'}
              onChange={(event: any): void => setFormData({
                ...formData, 
                price: convertPriceToNumber(event.target.value) 
              })}
              InputProps={{
                startAdornment: <InputAdornment position="start">£</InputAdornment>,
              }}
            />
            <Gap height={50} />
            <CustomSelect 
              style={{ marginLeft: -50 }}
              options={valueArray}
              label={'no. of beds'}
              value={formData.noBeds}
              onItemSelect={(value: number) => setFormData({
                ...formData,
                noBeds: value
              })}
            />
            <Gap height={20} /> 
            <CustomSelect 
              style={{ marginLeft: -50 }}
              options={valueArray}
              label={'no. of baths'}
              value={formData.noBaths}
              onItemSelect={(value: number) => setFormData({
                ...formData,
                noBaths: value
              })}
            />
            <Gap height={50} />
            <FormControl style={{ display: 'flex', flexDirection: 'row' }}>
              <Button 
                style={{ marginRight: 10 }} 
                variant={formData.isFreehold ? 'contained' : 'outlined'}
                onClick={(): void => setFormData({ ...formData, isFreehold: !formData.isFreehold })}
              >
                Freehold
              </Button>
              {/* // TODO: Filter by freehold */}
              {/* <Button 
                variant={formData.isChainfree ? 'contained' : 'outlined'}
                onClick={(): void => setFormData({ ...formData, isChainfree: !formData.isChainfree })}
              >
                Chain-Free
              </Button> */}
            </FormControl>
            <Gap height={80} />
            <Button 
              variant='outlined'
              disabled={!formDataIsValid(formData)}
              onClick={(): void => {
                sendResults(undefined)
                setMenuOpen(false)
                getProperties()
                getRentalPrices()
                // getPriceHistory()
              }}
            >
              SEARCH
            </Button>
            <Gap height={60} />
          </FormGroup>
          <MenuOpenBar
            isMenuOpen={menuOpen}
            setMenuOpen={setMenuOpen}
          />
        </div>
      </Condition>
    </>
  );
};

export default SearchMenu;