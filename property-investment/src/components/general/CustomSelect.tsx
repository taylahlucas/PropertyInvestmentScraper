import { FormControl, MenuItem, Select } from "@mui/material";
import { ItemProps } from '../../utils/constants';

interface SelectProps {
  style?: any;
  options: ItemProps[];
  label: string;
  value: number;
  onItemSelect: (value: number) => void;
}

const CustomSelect = ({ style, options, label, value = 1, onItemSelect }: SelectProps): JSX.Element => {
  return (
    <FormControl style={{ ...style, display: 'flex', flexDirection: 'row' }}>
      <div style={{ padding: 16 }}>{label}</div>
      <Select value={value}>
        {options.map(option => 
          <MenuItem 
            key={option.value} 
            value={option.value}
            onClick={(): void => onItemSelect(Number(option.value))}
          >
            {option.label}
          </MenuItem>  
        )}
      </Select>
    </FormControl>
  );
};

export default CustomSelect;