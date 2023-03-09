import { useEffect, useState } from "react";
import { ListItem } from "@mui/material";
import Condition from "../Condition";

interface SearchDropdownProps {
  className?: string;
  options?: string[];
  onItemSelect: (value: string) => void;
  reset: boolean;
}

const CustomSearchDropdownView = ({ className, options = [], onItemSelect, reset }: SearchDropdownProps): JSX.Element => {
  const [closeMenu, setCloseMenu] = useState(true)

  useEffect(() => {
    setCloseMenu(false)
  }, [reset]);

  return (
    <Condition condition={!closeMenu}>
      <div className={className}>
        {options?.map(item => 
          <ListItem 
            key={item} 
            style={{ 
              justifyContent: 'flex-start', 
              padding: 10,
              fontSize: 12
            }}
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