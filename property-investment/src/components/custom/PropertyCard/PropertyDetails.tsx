import styles from '@/styles/PropertyView.module.css';
import generalStyles from '@/styles/General.module.css';
import PropertyImageView from './PropertyImageView';
import { PropertyCardProps } from './PropertyCard';
import Gap from '@/components/general/Gap';
import Row from '@/components/general/StyledComponents/Row';
import PropertyBedBaths from './PropertyBedBaths';
import PropertyInfo from './PropertyInfo';
import Column from '@/components/general/StyledComponents/Column';

const PropertyDetails = ({ property }: PropertyCardProps) => {
  return (
    <Row>
      <div className={styles.imagePriceContainer}>
        <PropertyImageView images={property.images} />
        <div className={`${generalStyles.titleLarge} ${styles.price}`}>{property.price}</div>
      </div>
      
      <div className={styles.propertyDetails}>
        <Gap />
        <div className={generalStyles.header}>{property.address}</div>
        <Gap height={10} />
        <Row customStyle={generalStyles.spaceBetween}>
          <PropertyBedBaths beds={property.no_beds} baths={property.no_baths} />
          <div className={`${generalStyles.description} ${generalStyles.centerContent}`}>{property.description.replace('house for sale', '')}</div>
        </Row>
        {/* // TODO: Function to detect if chain-free is present in extra_details */}
        <Column customStyle={styles.propertyInfoCol}>
          <PropertyInfo tenure={property.tenure} daysOtm={property.days_otm} />
          <a href={property.href} className={generalStyles.textSmall}>View property listing</a>
        </Column>
      </div>
    </Row>
  );
};

export default PropertyDetails;