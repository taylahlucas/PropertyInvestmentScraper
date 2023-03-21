import styles from '@/styles/PropertyView.module.css';
import { PropertyItem } from '@/utils/interfaces';
import PropertyLocations from './PropertyLocations';
import Condition from '@/components/general/Condition';

interface PropertyDetailsProps {
  open: boolean;
  property: PropertyItem;
}

const PropertyDetails = ({ open, property }: PropertyDetailsProps) => {
  const extra_details: string[] = property.extra_details.concat(property.features);

  return (
    <Condition condition={open}>
      <div className={styles.dropdownContainer}>
        <ul className={styles.detailsContainer}>
          {extra_details.map((detail, index) => 
            <li key={index} className={styles.details}>{detail}</li>
          )}
        </ul>
        <div className={styles.locationBox}>
          <PropertyLocations 
            header={'Schools'}
            locations={property.schools}
          />
          <PropertyLocations 
            header={'Stations'}
            locations={property.stations}
          />
        </div>
      </div>
    </Condition>
  )
};

export default PropertyDetails;