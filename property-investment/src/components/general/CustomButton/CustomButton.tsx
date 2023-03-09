import { Button } from "@mui/material";
import { ButtonVariant, ButtonAdornment } from "@/utils/types";
import CustomButtonIconFactory from './CustomButtonIconFactory';

interface CustomButtonProps {
  variant: ButtonVariant;
  title: string;
  iconType?: ButtonAdornment;
  onClick: () => void;
}

const CustomButton = ({ variant, title, iconType, onClick }: CustomButtonProps) => {
  
  return (
    <Button 
      sx={{ height: 40, minWidth: 120 }}
      variant={variant}
      onClick={onClick}
      startIcon={!!iconType ? <CustomButtonIconFactory type={iconType} /> : null}
    >
      {title}
    </Button>
  );
};

export default CustomButton;