import { IconButton } from "@mui/material";
import * as ArrowBack from "@mui/icons-material/ArrowBack";
import * as ArrowForward from "@mui/icons-material/ArrowForward";
import Condition from './Condition';

interface MenuOpenBarProps {
  backgroundColor?: string;
  isMenuOpen: boolean;
  setMenuOpen: (isMenuOpen: boolean) => void;
  isVertical?: boolean;
  // TODO: Closed/Open icons -- create enum
  //arrowType: up/down, left/right from Left, left/right from Right,
  style?: any;
}

const MenuOpenBar = ({
  backgroundColor,
  isMenuOpen,
  setMenuOpen,
  isVertical = true,
  style
}: MenuOpenBarProps): JSX.Element => {
  return (
    <div 
      style={{
        width: isVertical ? 20 : 100,
        height: isVertical ? 100 : 20,
        backgroundColor: backgroundColor,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 3,
        ...style,
      }} 
      onMouseDown={() => setMenuOpen(!isMenuOpen)}
    >

      <IconButton aria-label="arrow" style={{ height: 10, width: 10, alignSelf: 'center' }}>
        <Condition condition={isMenuOpen} conditionalElement={<ArrowForward.default />}>
          <ArrowBack.default />
        </Condition>
      </IconButton>
    </div>
  );
};

export default MenuOpenBar;