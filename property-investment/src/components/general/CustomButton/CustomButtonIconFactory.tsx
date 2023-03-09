import { ButtonAdornment } from "../../../utils/types";
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import AddIcon from '@mui/icons-material/Add';

interface CustomButtonIconFactoryProps {
  type: ButtonAdornment;
}

const CustomButtonIconFactory = ({ type }: CustomButtonIconFactoryProps) => {
  switch(type) {
    case 'filter':
      return <FilterAltOutlinedIcon />
    case 'add':
      return <AddIcon />;
    default:
      return <FilterAltOutlinedIcon />;
  }
}

export default CustomButtonIconFactory;