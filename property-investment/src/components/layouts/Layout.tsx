import Header from '../general/Header';

interface LayoutProps {
  headerChildren: any;
  children?: any;
}

const Layout = ({ headerChildren }: LayoutProps) => {
  return (
    <>
      <Header>
        {headerChildren}
      </Header>
    </>  
  );
};

export default Layout;