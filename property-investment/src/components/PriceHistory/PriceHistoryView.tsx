import { PriceHistoryData } from '../../utils/interfaces';

interface PriceHistoryViewProps {
  results: PriceHistoryData | undefined;
}

const PriceHistoryView = ({ results }: PriceHistoryViewProps): JSX.Element => {
  return (
    <div style={{ 
      width: 300,
      height: 400,
      paddingLeft: 20,
      paddingRight: 20
    }}>
      <div style={{ fontSize: 20, fontWeight: 600, textAlign: 'center' }}>{results?.title}</div>
      <div style={{ paddingTop: 20 }}>{results?.description}</div>
    </div>
  );
};

export default PriceHistoryView;