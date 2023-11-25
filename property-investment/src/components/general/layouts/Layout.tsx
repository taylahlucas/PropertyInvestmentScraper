import Header from '../Header';

interface LayoutProps {
  header: any;
  children?: any;
}

const Layout = ({ header, children }: LayoutProps) => {
  return (
    <>
      <Header>
        {header}
      </Header>
      {children}
    </>  
  );
};

export default Layout;