import styles from '@/styles/PropertyView.module.css';
import { useState } from 'react';
import { PropertyItem } from '@/utils/interfaces';
import PropertyImageView from './PropertyImageView';
import PropertyDetails from './PropertyDetails';
import Dropdown from '@/components/general/Dropdown/Dropdown';
import ClickableView from '@/components/general/ClickableView';

interface PropertyCardProps {
  property: PropertyItem;
}

const PropertyCard = ({ property }: PropertyCardProps) => {
  const [detailsOpen, setDetailsOpen] = useState(false);

  return (
    <Dropdown
      header={
        <ClickableView 
          className={styles.propertyCardContainer}
          onClick={(): void => setDetailsOpen(!detailsOpen)}
        >
          <div className={styles.contentContainer}>
            <PropertyImageView images={property.images} />
            <div className={styles.price}>{property.price}</div>
          </div>
        </ClickableView>
      }
      view={
        <PropertyDetails
          open={detailsOpen}
          details={property.extra_details} features={property.features} 
        />
      }
    />
  )
};

export default PropertyCard;