interface HeaderProps {
  children: any;
}

const Header = ({ children }: HeaderProps) => {
  return (
    <div className='header'>
      {children}
    </div>
  );
};

export default Header;