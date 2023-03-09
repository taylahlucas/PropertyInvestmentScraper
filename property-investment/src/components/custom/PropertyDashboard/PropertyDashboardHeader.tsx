
import styles from '@/styles/General.module.css';
import { useState } from 'react';
import { TextField } from '@mui/material';
import CustomSearchBar from '../../general/CustomSearchBar/CustomSearchBar';
import CustomButton from '../../general/CustomButton';
import { filterSearchData, searchAddressData } from '../../../data/functions';
import { SearchFormData } from '../../../utils/interfaces';

const PropertyDashboardHeader = () => {
  const [searchValue, setSearchValue] = useState('')
  const searchBarData = filterSearchData(searchValue, searchAddressData)
  const [formData, setFormData] = useState<SearchFormData>({
    noBeds: 1,
    noBaths: 1,
    isFreehold: true,
    isChainfree: true
  });

  return (
    <div className={styles.headerContainer}>
      <div className={styles.header}>Properties</div>
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
      <CustomButton
        variant='contained'
        onClick={() => console.log("OPEN FILTER")}
        iconType='filter'
        title="Filter"
      />
    </div>
  );
}

export default PropertyDashboardHeader;