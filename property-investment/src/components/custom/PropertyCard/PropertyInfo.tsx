import generalStyles from '@/styles/General.module.css';
import styles from '@/styles/PropertyView.module.css';
import Column from '@/components/general/StyledComponents/Column';
import Gap from '@/components/general/Gap';

interface PropertyInfoProps {
  tenure: string;
  daysOtm: string;
}

const PropertyInfo = ({ tenure, daysOtm }: PropertyInfoProps) => {
  return (
    <Column customStyle={`${generalStyles.paddingLeftMed} ${styles.propertyInfo}`}>
        <Gap />
        <div className={generalStyles.textSmall}>{tenure}</div>
        <Gap />
        <div className={generalStyles.textSmall}>Posted {daysOtm.replace('OnTheMarket', '')}</div>
    </Column>
  );
};

export default PropertyInfo;