import CustomButton, { CustomButtonProps } from "./CustomButton";

interface SelectableButtonProps extends CustomButtonProps {
  selected: boolean;
}

const SelectableButton = ({
  selected,
  ...props
 }: SelectableButtonProps) => {
  return (
    <CustomButton
      {...props}
      backgroundColor = {selected ? props.backgroundColor : 'transparent'}
    >
      {props.children}
    </CustomButton>
  );
}

export default SelectableButton;