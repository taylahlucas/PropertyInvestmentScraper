import generalStyles from '@/styles/General.module.css';
import BedOutlinedIcon from '@mui/icons-material/BedOutlined';
import BathtubOutlinedIcon from '@mui/icons-material/BathtubOutlined';
import Row from '@/components/general/StyledComponents/Row';

interface PropertyBedBathsProps {
  beds: string;
  baths: string;
}

const PropertyBedBaths = ({ beds, baths }: PropertyBedBathsProps) => {
  return (
    <Row customStyle={generalStyles.paddingLeftSmall}>
      <Row>
        <BedOutlinedIcon style={{ color: '#B9BEC6', fontSize: 20 }} />
        <div className={`${generalStyles.paddingLeftMed} ${generalStyles.textSmall}`}>{beds}</div>
      </Row>
      <Row customStyle={generalStyles.paddingLeftSmall}>
        <BathtubOutlinedIcon style={{ color: '#B9BEC6', fontSize: 20 }} />
        <div className={`${generalStyles.paddingLeftSmall} ${generalStyles.textSmall}`}>{baths}</div>
      </Row>
    </Row>
  );
};

export default PropertyBedBaths;