import { TableRow, TableHead, TableCell, TableSortLabel } from '@mui/material';
import { PropertyItem, Order } from '../../utils/interfaces';

interface HeaderCell {
  id: keyof PropertyItem;
  label: string;
  numeric: boolean;
}

const headerCells: readonly HeaderCell[] = [
  {
    id: 'price',
    numeric: true,
    label: 'price'
  },
  {
    id: 'address',
    numeric: false,
    label: 'address'
  },
  {
    id: 'description',
    numeric: false,
    label: 'description'
  },
  {
    id: 'tenure',
    numeric: false,
    label: 'tenure'
  },
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
    id: 'days_otm',
    numeric: false,
    label: 'days on the market'
  },
  {
    id: 'href',
    numeric: false,
    label: 'link'
  },
];

interface SearchResultsHeaderFilterProps {
  onRequestSort: (event: React.MouseEvent<unknown>, property: keyof PropertyItem) => void;
  order: Order;
  orderBy: string;
  rowCount: number;
}


const SearchResultsHeaderFilter = ({ onRequestSort, order, orderBy, rowCount }: SearchResultsHeaderFilterProps) => {
  const createSortHandler = (property: keyof PropertyItem) => (event: React.MouseEvent<unknown>) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead style={{ backgroundColor: 'lightgrey' }}>
      <TableRow>
        <TableCell />
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

export default SearchResultsHeaderFilter;