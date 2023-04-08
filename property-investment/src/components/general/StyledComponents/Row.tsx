import styles from '@/styles/General.module.css';

interface RowProps {
  children: any;
  customStyle?: string;
}

const Row = ({ children, customStyle }: RowProps) => {
  return (
    <div className={`${styles.rowContainer} ${customStyle}`}>
      {children}
    </div>
  );
};

export default Row;