import Layout from '../../layouts/Layout';
import PropertyDashboardHeader from './Header/PropertyDashboardHeader';
import PropertiesView from './PropertiesView';
import { mockPropertyItems } from '@/data/mock';
import MapView from '../MapView/MapView';
import styles from '@/styles/PropertyView.module.css';
import Row from '@/components/general/StyledComponents/Row';

const PropertyDashboard = () => {
  return (
    <Layout headerChildren={<PropertyDashboardHeader />}>
      <Row customStyle={styles.dashboardContainer}>
        <MapView addresses={mockPropertyItems.map((item) => item.address)} />
        <PropertiesView results={mockPropertyItems} />
      </Row>
    </Layout>
  );
};

export default PropertyDashboard;