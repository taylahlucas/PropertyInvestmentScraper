import styles from '@/styles/PropertyView.module.css';
import Condition from '@/components/general/Condition';

interface PropertyDetailsProps {
  open: boolean;
  details: string[];
  features: string[];
}

const PropertyDetails = ({ open, details, features }: PropertyDetailsProps) => {
  const extra_details: string[] = details.concat(features);

  return (
    <Condition condition={open}>
      <div className={styles.dropdownDetails}>
        <ul className={styles.detailsContainer}>
          {extra_details.map((detail, index) => 
            <li key={index} className={styles.details}>{detail}</li>
          )}
        </ul>
      </div>
    </Condition>
  )
};

export default PropertyDetails;