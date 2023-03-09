import Layout from '../../layouts/Layout';
import PropertyDashboardHeader from './Header/PropertyDashboardHeader';
import PropertiesView from './PropertiesView';
import { mockPropertyItems } from '@/data/mock';

const PropertyDashboard = () => {
  return (
    <Layout
      headerChildren={<PropertyDashboardHeader />}
    >
      <PropertiesView results={mockPropertyItems} />
    </Layout>
  );
};

export default PropertyDashboard;