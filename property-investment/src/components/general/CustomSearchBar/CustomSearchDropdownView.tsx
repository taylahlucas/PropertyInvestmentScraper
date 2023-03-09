import styles from '@/styles/General.module.css'
import { useEffect, useState } from "react";
import { ListItem } from "@mui/material";
import Condition from "../Condition";

interface SearchDropdownProps {
  options?: string[];
  onItemSelect: (value: string) => void;
  reset: boolean;
}

const CustomSearchDropdownView = ({ options = [], onItemSelect, reset }: SearchDropdownProps): JSX.Element => {
  const [closeMenu, setCloseMenu] = useState(true)

  useEffect(() => {
    setCloseMenu(false)
  }, [reset]);

  return (
    <Condition condition={!closeMenu}>
      <div className={styles.searchDropDown}>
        {options?.map(item => 
          <ListItem 
            key={item} 
            className={styles.searchListItem}
            onClick={(): void => {
              onItemSelect(item);
              setCloseMenu(true);
            }}
          >
            {item}
          </ListItem>
        )}
      </div>
    </Condition>
  );
};

export default CustomSearchDropdownView;