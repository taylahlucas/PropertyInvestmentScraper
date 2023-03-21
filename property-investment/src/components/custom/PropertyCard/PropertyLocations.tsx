import styles from '@/styles/PropertyView.module.css';
import { LocationData } from '@/utils/interfaces';

interface PropertyLocationsProps {
  header: string;
  locations: LocationData[]
}

const PropertyLocations = ({ header, locations }: PropertyLocationsProps) => {
  return (
    <div className={styles.locationsContainer}>
      <div className={styles.locationsHeader}>{header}</div>
      <ul>
        {Object.values(locations).map((item: LocationData, index: number) => {
          return <li 
            key={index} 
            className={styles.locationsList}
          >
            <div className={styles.locationRow}>{item.name}</div>
            <div className={styles.locationDistance}>{item.distance}</div>
          </li>
        })}
      </ul>
    </div>
  )
};

export default PropertyLocations;