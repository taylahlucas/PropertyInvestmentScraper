import { Button } from "@mui/material";
import { ButtonVariant, ButtonAdornment } from "../../utils/types";
import CustomButtonIconFactory from './CustomButtonIconFactory';

interface CustomButtonProps {
  variant: ButtonVariant; // contained or outlined
  title: string;
  iconType?: ButtonAdornment;
  onClick: () => void;
}

const CustomButton = ({ variant, title, iconType, onClick }: CustomButtonProps) => {
  
  return (
    <Button 
      sx={{ marginRight: 10, height: 40, minWidth: 120 }}
      variant={variant}
      onClick={onClick}
      startIcon={!!iconType ? <CustomButtonIconFactory type={iconType} /> : null}
    >
      {title}
    </Button>
  );
};

export default CustomButton;