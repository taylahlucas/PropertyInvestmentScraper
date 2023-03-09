import { useState } from 'react';
import CustomButton from '@/components/general/CustomButton/CustomButton';
import HeaderFilterDropdownView from './HeaderFilterDropdownView';
import DropDown from '@/components/general/Dropdown/Dropdown';


const HeaderFilter = () => {
  const [filterOpen, setFilterOpen] = useState(false);

  return (
    <DropDown
      header={
        <CustomButton
          variant='contained'
          onClick={() => setFilterOpen(!filterOpen)}
          iconType='filter'
          title="Filter"
        />
      }
      view={
        <HeaderFilterDropdownView open={filterOpen} />
      }
    />
  );
};

export default HeaderFilter;