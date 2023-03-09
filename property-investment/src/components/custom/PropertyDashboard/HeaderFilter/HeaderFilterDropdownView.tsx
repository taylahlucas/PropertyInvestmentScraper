import Condition from '@/components/general/Condition';
import styles from '@/styles/General.module.css';

interface HeaderFilterDropDownViewProps {
  open: boolean;
};

const HeaderFilterDropDownView = ({ open = false }: HeaderFilterDropDownViewProps) => {
  return (
    <Condition condition={open}>
      <div className={styles.headerFilterContainer}>
        
      </div>
    </Condition>
  );
};

export default HeaderFilterDropDownView;