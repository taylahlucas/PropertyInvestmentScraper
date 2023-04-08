import styles from '@/styles/PropertyView.module.css';
import generalStyles from '@/styles/General.module.css';
import { LocationData } from '@/utils/interfaces';

interface PropertyLocationsProps {
  header: string;
  locations: LocationData[]
}

const PropertyLocations = ({ header, locations }: PropertyLocationsProps) => {
  return (
    <div>
      <div className={`${generalStyles.titleSmall} ${styles.locationsHeader}`}>{header}</div>
      <ul className={styles.locationsContainer}>
        {Object.values(locations).map((item: LocationData, index: number) => {
          return <li 
            key={index} 
            className={styles.locationsList}
          >
            <div className={`${generalStyles.textSmall} ${styles.locationRow}`}>{item.name}</div>
            <div className={`${generalStyles.textSmall} ${generalStyles.paddingLeftMed}`}>{item.distance}</div>
          </li>
        })}
      </ul>
    </div>
  )
};

export default PropertyLocations;