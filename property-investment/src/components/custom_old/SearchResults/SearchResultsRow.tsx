import * as React from 'react';
import { IconButton, TableBody, TableCell, TableRow } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import SearchResultsSubRow from './SearchResultsSubRow';
import { createTableData } from '../../data/functions';

interface SearchResultsRowProps {
  row: ReturnType<typeof createTableData>;
}

const SearchResultsRow = ({ row }: SearchResultsRowProps) => {
  const [open, setOpen] = React.useState(false);
  
  return (
    <TableBody>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell style={{ fontWeight: 600 }}>{row.price}</TableCell>
        <TableCell>{row.address}</TableCell>
        <TableCell>{row.description}</TableCell>
        <TableCell align='center'>{row.tenure}</TableCell>
        <TableCell align='center'>{row.no_beds}</TableCell>
        <TableCell align='center'>{row.no_baths}</TableCell>
        <TableCell>{row.days_otm}</TableCell>
        <TableCell><a href={row.href} target="_blank">Go to website</a></TableCell>
      </TableRow>
      <SearchResultsSubRow row={row} isOpen={open} />
    </TableBody>
  );
}

export default SearchResultsRow;