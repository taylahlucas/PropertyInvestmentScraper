import styles from '@/styles/General.module.css';
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
    <form className={styles.searchBarContainer}>
      <TextField
        variant='standard'
        sx={{ borderRadius: 2, width: 400 }}
        placeholder={placeholder}
        value={value}
        className={styles.searchBar}
        onChange={(event): void => {
          setSearchValue(event.target.value ?? '')
        }}
        size={'small'}
        InputProps={{
          disableUnderline: true,
          endAdornment: (
            <IconButton 
              type="reset" 
              aria-label="cancel"
              onClick={() => setSearchValue('')
            }>
              <CancelIcon />
            </IconButton>
          )
        }}
      />
      <SearchDropdownView
        options={options} 
        onItemSelect={onItemSelect}
        reset={value.length > 0}
      />
    </form>
  );
};

export default CustomSearchBar;