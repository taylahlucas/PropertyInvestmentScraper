import generalStyles from '@/styles/General.module.css';
import BedOutlinedIcon from '@mui/icons-material/BedOutlined';
import BathtubOutlinedIcon from '@mui/icons-material/BathtubOutlined';
import Row from '@/components/general/StyledComponents/Row';
import Column from '@/components/general/StyledComponents/Column';

interface PropertyBedBathsProps {
  beds: string;
  baths: string;
}

const PropertyBedBaths = ({ beds, baths }: PropertyBedBathsProps) => {
  return (
    <Column customStyle={generalStyles.paddingSidesSmall}>
      <Row>
        <BedOutlinedIcon style={{ color: '#B9BEC6', fontSize: 20 }} />
        <div className={`${generalStyles.paddingLeftSmall} ${generalStyles.textSmall}`}>{beds}</div>
      </Row>
      <Row>
        <BathtubOutlinedIcon style={{ color: '#B9BEC6', fontSize: 20 }} />
        <div className={`${generalStyles.paddingLeftSmall} ${generalStyles.textSmall}`}>{baths}</div>
      </Row>
    </Column>
  );
};

export default PropertyBedBaths;