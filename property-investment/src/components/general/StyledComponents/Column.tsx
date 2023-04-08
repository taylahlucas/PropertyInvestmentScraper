import styles from '@/styles/General.module.css';

interface ColumnProps {
  children: any;
  customStyle?: string;
}

const Column = ({ children, customStyle }: ColumnProps) => {
  return (
    <div className={`${styles.colContainer} ${customStyle}`}>
      {children}
    </div>
  );
};

export default Column;