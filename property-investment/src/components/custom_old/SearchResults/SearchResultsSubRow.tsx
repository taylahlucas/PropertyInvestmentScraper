import * as React from 'react';
import NearestLocationsView from './NearestLocationsView';
import { Box, Collapse, TableBody, TableCell, TableRow } from '@mui/material';
import { createMockTableData } from '../../data/mock';
import { MAX_DESCRIPTION_HEIGHT, MAX_DESCRIPTION_WIDTH } from '../../utils/constants';

interface SearchResultsSubRowProps {
  row: ReturnType<typeof createMockTableData>;
  isOpen?: boolean;
}

interface LocationProps {
  name: string;
  location_type: string;
  distance: string;
}

const SearchResultsSubRow = ({ isOpen = false, row }: SearchResultsSubRowProps) => {  
  const styleExtraDetails = () => {
    const extra_details = row.extra_details.concat(row.features)
    return (
      <ul style={{ 
        height: MAX_DESCRIPTION_HEIGHT, 
        maxWidth: MAX_DESCRIPTION_WIDTH,
        overflow: 'hidden'
      }}>
        {extra_details.map((detail, index) => 
          <li key={index} style={{ fontWeight: 300 }}>{detail}</li>
        )}
      </ul>
    );
  }

  const styleNearestSuburbDetails = (header: string, details: string[]) => {
    return (
      <div style={{ maxWidth: MAX_DESCRIPTION_WIDTH }}>
        <div style={{ textAlign: 'center', fontWeight: 600 }}>{header}</div>
        <ul>
          {Object.values(details).map((item, index) => {
            const locationItem = item as unknown as LocationProps
            return <NearestLocationsView key={index} location={locationItem.name} distance={locationItem.distance}/>  }
          )}
        </ul>
      </div>
    )
  }

  return (
    <TableRow>
      <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={10}>
        <Collapse in={isOpen} timeout="auto" unmountOnExit>
          <Box sx={{ margin: 1, display: 'flex', flexDirection: 'row' }}>
            <TableCell 
              style={{ 
                display: 'flex', 
                flexDirection: 'row',
                width: 550, 
                overflowX: 'scroll'
              }}
            >
              {row.images.map((image) => (
                <img key={image} style={{ paddingRight: 10 }} src={image}/>
              ))}
            </TableCell>
            <TableCell>{styleExtraDetails()}</TableCell>
            <TableCell>{styleNearestSuburbDetails('STATIONS', row.stations)}</TableCell>
            <TableCell>{styleNearestSuburbDetails('SCHOOLS', row.schools)}</TableCell>
          </Box>
        </Collapse>
      </TableCell>
    </TableRow>
  );
}

export default SearchResultsSubRow;