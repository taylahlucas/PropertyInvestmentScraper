import Layout from '../../layouts/Layout';
import PropertyDashboardHeader from './PropertyDashboardHeader';

const PropertyDashboard = () => {
  return (
    <Layout
      headerChildren={<PropertyDashboardHeader />}
    >
    </Layout>
  );
};

export default PropertyDashboard;