import styles from '@/styles/PropertyView.module.css';
import { PropertyItem } from '@/utils/interfaces';
import PropertyCard from '../PropertyCard/PropertyCard';

interface PropertiesViewProps {
  results?: PropertyItem[];
}

const PropertiesView = ({ results }: PropertiesViewProps) => {
  return (
    <div className={styles.propertyViewContainer}>
      {results?.map(property => <PropertyCard key={property.property_id} property={property} />)}
    </div>
  )
};

export default PropertiesView;