import Header from '../general/Header';

interface LayoutProps {
  headerChildren: any;
  children?: any;
}

const Layout = ({ headerChildren, children }: LayoutProps) => {
  return (
    <>
      <Header>
        {headerChildren}
      </Header>
      {children}
    </>  
  );
};

export default Layout;