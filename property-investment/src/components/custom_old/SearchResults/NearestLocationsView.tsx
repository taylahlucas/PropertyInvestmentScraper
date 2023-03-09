import { Box } from '@mui/material';
import { MAX_DESCRIPTION_HEIGHT, MAX_DESCRIPTION_WIDTH } from '../../utils/constants';

interface NearestLocationViewProps {
  location: string;
  distance: string;
}

const NearestLocationsView = ({ location, distance }: NearestLocationViewProps) => {
  return (
    <Box style={{ 
      display: 'flex', 
      flexDirection: 'row',
      paddingTop: 30,
      maxHeight: MAX_DESCRIPTION_HEIGHT,
      overflow: 'hidden',
      overflowY: 'scroll'
    }}>
      <div style={{ fontWeight: 200, paddingRight: 10, width: MAX_DESCRIPTION_WIDTH/2 }}>{location}</div>
      <div>{distance}</div>
    </Box>
  );
};

export default NearestLocationsView;