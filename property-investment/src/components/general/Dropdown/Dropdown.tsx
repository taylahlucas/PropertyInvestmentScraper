import styles from '@/styles/DashboardHeader.module.css';

interface DropdownProps {
  header: any;
  view: any;
}

const Dropdown = ({ header, view }: DropdownProps) => {
  return (
    <div className={styles.dropdownHeader}>
      {header}
      {view}
    </div>
  );
};

export default Dropdown;