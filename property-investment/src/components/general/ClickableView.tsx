interface ClickableViewProps {
  className?: string;
  children: any;
  onClick: () => void;
}

const ClickableView = ({ className, children, onClick }: ClickableViewProps) => {
  return (
    <div className={className} onClick={onClick}>
      {children}
    </div>
  );
};

export default ClickableView;