import { Button } from "@mui/material";
import { ButtonVariant, ButtonAdornment } from "@/utils/types";
import CustomButtonIconFactory from './CustomButtonIconFactory';

export interface CustomButtonProps {
  variant: ButtonVariant;
  children: string;
  iconType?: ButtonAdornment;
  backgroundColor?: string;
  onClick: () => void;
}

const CustomButton = ({ variant, children, iconType, backgroundColor = '#606D97', onClick }: CustomButtonProps) => {
  return (
    <Button 
      sx={{ height: 40, minWidth: 120, backgroundColor }}
      variant={variant}
      onClick={onClick}
      startIcon={!!iconType ? <CustomButtonIconFactory type={iconType} /> : null}
    >
      {children}
    </Button>
  );
};

export default CustomButton;