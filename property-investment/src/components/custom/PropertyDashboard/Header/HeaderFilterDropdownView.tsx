import styles from '@/styles/DashboardHeader.module.css';
import Condition from '@/components/general/Condition';
import SearchPropertiesForm from '../../SearchPropertiesForm/SearchPropertiesForm';

interface HeaderFilterDropDownViewProps {
  open: boolean;
};

const HeaderFilterDropDownView = ({ open = false }: HeaderFilterDropDownViewProps) => {
  return (
    <Condition condition={open}>
      <div className={styles.headerFilterContainer}>
        <SearchPropertiesForm />
      </div>
    </Condition>
  );
};

export default HeaderFilterDropDownView;