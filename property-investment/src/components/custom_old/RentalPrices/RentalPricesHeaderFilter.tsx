import { TableRow, TableHead, TableCell, TableSortLabel } from '@mui/material';
import { Order, RentPriceDataHeader } from '../../utils/interfaces';

interface HeaderCell {
  id: keyof RentPriceDataHeader;
  label: string;
  numeric: boolean;
}

const headerCells: readonly HeaderCell[] = [
  {
    id: 'no_beds',
    numeric: true,
    label: 'no. beds'
  },
  {
    id: 'no_baths',
    numeric: true,
    label: 'no. baths'
  },
  {
    id: 'property_type',
    numeric: false,
    label: 'type'
  },
  {
    id: 'avg',
    numeric: true,
    label: 'avg.'
  }
];

interface RentalPricesHeaderFilterProps {
  onRequestSort: (event: React.MouseEvent<unknown>, property: keyof RentPriceDataHeader) => void;
  order: Order;
  orderBy: string;
  rowCount: number;
}


const RentalPricesHeaderFilter = ({ onRequestSort, order, orderBy, rowCount }: RentalPricesHeaderFilterProps) => {
  const createSortHandler = (rentData: keyof RentPriceDataHeader) => (event: React.MouseEvent<unknown>) => {
    onRequestSort(event, rentData);
  };

  return (
    <TableHead style={{ backgroundColor: 'lightgrey' }}>
      <TableRow>
        {headerCells.map((cell: HeaderCell) => 
          <TableCell
            key={cell.id}
            align='center'
            sortDirection={orderBy === cell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy == cell.id}
              direction={orderBy == cell.id ? order : 'asc'}
              onClick={createSortHandler(cell.id)}
            >
              {cell.label}
            </TableSortLabel>
          </TableCell>
        )}
      </TableRow>
    </TableHead>
  );
};

export default RentalPricesHeaderFilter;