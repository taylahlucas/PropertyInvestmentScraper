import Layout from '../../layouts/Layout';
import PropertyDashboardHeader from './Header/PropertyDashboardHeader';
import PropertiesView from './PropertiesView';
import { mockPropertyItems } from '@/data/mock/propertyItems';
import RentPricesChart from '../StatisticsView/RentPricesChart';

const PropertyDashboard = () => {
  return (
    <Layout
      headerChildren={<PropertyDashboardHeader />}
    >
      <PropertiesView results={mockPropertyItems} />
      <div style={{ position: 'absolute', width: 600, height: 600, marginLeft: 650, bottom: 0 }}>
        <RentPricesChart />
      </div>
    </Layout>
  );
};

export default PropertyDashboard;