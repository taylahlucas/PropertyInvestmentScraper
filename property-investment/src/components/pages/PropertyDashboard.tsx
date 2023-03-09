import { useState } from 'react';
import Layout from '../layouts/Layout';
import { filterSearchData, searchAddressData } from '../../data/functions';
import { SearchFormData } from '../../utils/interfaces';
import CustomSearchBar from '../general/CustomSearchBar/CustomSearchBar';

const PropertyDashboard = () => {
  const [searchValue, setSearchValue] = useState('')
  const searchBarData = filterSearchData(searchValue, searchAddressData)
  const [formData, setFormData] = useState<SearchFormData>({
    noBeds: 1,
    noBaths: 1,
    isFreehold: true,
    isChainfree: true
  });

  return (
    <Layout
      headerChildren={
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
      }
    >
    </Layout>
  );
};

export default PropertyDashboard;