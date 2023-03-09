import styles from '@/styles/Home.module.css'
import { IconButton, TextField } from "@mui/material";
import CancelIcon from '@mui/icons-material/Cancel'
import SearchDropdownView from './CustomSearchDropdownView';

interface CustomSearchBarProps {
  placeholder?: string;
  value: string;
  setSearchValue: (value: string) => void;
  options: string[];
  onItemSelect: (value: string) => void;
}

const CustomSearchBar = ({ 
  placeholder = 'Search', 
  value,
  setSearchValue, 
  options, 
  onItemSelect 
}: CustomSearchBarProps): JSX.Element => {
  return (
    <form>
      <TextField
        placeholder={placeholder}
        value={value}
        onChange={(event): void => {
          setSearchValue(event.target.value ?? '')
        }}
        size={'small'}
        InputProps={{
          endAdornment: (
            <IconButton 
              type="reset" 
              aria-label="cancel"
              onClick={() => setSearchValue('')
            }>
              <CancelIcon style={{ fill: "darkblue" }} />
            </IconButton>
          )
        }}
      />
      <SearchDropdownView
        className={styles.test}
        options={options} 
        onItemSelect={onItemSelect}
        reset={value.length > 0}
      />
    </form>
  );
};

export default CustomSearchBar;