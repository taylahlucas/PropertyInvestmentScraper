
import styles from '@/styles/DashboardHeader.module.css';
import { useState } from 'react';
import CustomSearchBar from '../../../general/CustomSearchBar/CustomSearchBar';
import { filterSearchData, searchAddressData } from '../../../../data/functions';
import { SearchFormData } from '../../../../utils/interfaces';
import HeaderFilter from './HeaderFilter';

const PropertyDashboardHeader = () => {
  const [searchValue, setSearchValue] = useState('')
  const [filterOpen, setFilterOpen] = useState(false);
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
      <HeaderFilter />
    </div>
  );
}

export default PropertyDashboardHeader;