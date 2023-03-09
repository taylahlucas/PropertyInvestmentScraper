import styles from '@/styles/General.module.css';
import Condition from '@/components/general/Condition';

interface DropdownViewProps {
  open: boolean;
}

const DropdownView = ({ open }: DropdownViewProps) => {
  return (
    <Condition condition={open}>
    <div className={styles.dropdown}>
      
    </div>
  </Condition>
  );
};

export default DropdownView;