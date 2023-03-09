import * as React from 'react';
import { TableBody, TableCell, TableRow } from '@mui/material';
import { createRentPricesTableData } from '../../data/functions';

interface RentalPricesRowProps {
  row: ReturnType<typeof createRentPricesTableData>;
}

const RentalPricesRowProps = ({ row }: RentalPricesRowProps) => {
  const [open, setOpen] = React.useState(false);
  
  return (
    <TableBody>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell align='center'>{row.no_beds}</TableCell>
        <TableCell align='center'>{row.no_baths}</TableCell>
        <TableCell align='center'>{row.property_type}</TableCell>
        <TableCell align='center'>{row.avg}</TableCell>
      </TableRow>
    </TableBody>
  );
}

export default RentalPricesRowProps;