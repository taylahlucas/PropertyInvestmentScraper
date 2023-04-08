import styles from '@/styles/PropertyView.module.css';
import { useState } from 'react';
import { PropertyItem } from '@/utils/interfaces';
import PropertyDetails from './PropertyDetails';
import PropertyExtraDetails from './PropertyExtraDetails';
import Dropdown from '@/components/general/Dropdown/Dropdown';
import ClickableView from '@/components/general/ClickableView';

export interface PropertyCardProps {
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
          <PropertyDetails property={property} />
        </ClickableView>
      }
      view={
        <PropertyExtraDetails
          open={detailsOpen}
          property={property}
        />
      }
    />
  )
};

export default PropertyCard;