import styles from '@/styles/DashboardHeader.module.css';
import { useState } from 'react';
import { FormGroup, TextField, InputAdornment } from "@mui/material";
import { SearchFormData, PropertyItem, RentPriceData, PriceHistoryData } from '@/utils/interfaces';
import { valueArray, formGapHeight } from '@/utils/constants';
import { filterSearchData, searchAddressData, convertPriceToNumber, formDataIsValid } from '@/data/functions';
import Gap from '@/components/general/Gap';
import CustomSelect from '@/components/general/CustomSelect';
import SelectableButton from '@/components/general/CustomButton/SelectableButton';

const SearchPropertiesForm = () => {
  const [formData, setFormData] = useState<SearchFormData>({
    noBeds: 1,
    noBaths: 1,
    isFreehold: true,
    isChainfree: true
  });
  return (
    <div className={styles.formGroup}>
      <FormGroup>
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
        <Gap height={formGapHeight} />
        <CustomSelect
          style={{ marginLeft: 5}}
          options={valueArray}
          label={'no. of beds'}
          value={formData.noBeds}
          onItemSelect={(value: number) => setFormData({
            ...formData,
            noBeds: value
          })}
        />
        <Gap height={formGapHeight} /> 
        <CustomSelect
          options={valueArray}
          label={'no. of baths'}
          value={formData.noBaths}
          onItemSelect={(value: number) => setFormData({
            ...formData,
            noBaths: value
          })}
        />
        <Gap height={formGapHeight} />
        <SelectableButton
          variant={formData.isFreehold ? 'contained' : 'outlined'}
          children="Freehold"
          onClick={(): void => setFormData({ ...formData, isFreehold: !formData.isFreehold })}
          selected={formData.isFreehold}
        />
      </FormGroup>
    </div>
  );
};

export default SearchPropertiesForm;