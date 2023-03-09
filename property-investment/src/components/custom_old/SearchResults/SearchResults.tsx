import { TableContainer, Table } from '@mui/material';
import SearchResultsRow from './SearchResultsRow';
import Condition from '../general/Condition';
import LoadingPage from '../layouts/LoadingPage';
import NoResultsPage from '../layouts/NoResultsPage';
import React, { useState } from 'react';
import SearchResultsHeaderFilter from './SearchResultsHeaderFilter';
import { PropertyItem, Order } from '../../utils/interfaces';
import { stableSort, getComparator } from '../../data/functions';

interface SearchResultsProps {
  results?: PropertyItem[];
}

const SearchResults = ({ results }: SearchResultsProps): JSX.Element => {
  const [order, setOrder] = useState<Order>('asc');
  const [orderBy, setOrderBy] = useState<keyof PropertyItem>('price');

  const handleRequestSort = (
    event: React.MouseEvent<unknown>,
    property: keyof PropertyItem
  ) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };
  const stabilizedResults: readonly any[] = !!results ? results : [{} as any]
  
  return (
    <Condition 
      condition={!!results && results?.length > 0}
      conditionalElement={results?.length == 0 ? <NoResultsPage /> : <LoadingPage />}
    >
      <TableContainer style={{ 
        position: 'absolute',
        overflow: 'scroll',
        width: '100%'
      }}>
        <Table aria-label="collapsible table">
          <SearchResultsHeaderFilter 
            order={order}
            orderBy={orderBy}
            onRequestSort={handleRequestSort}
            rowCount={results?.length ?? 0}
          />
          {stableSort(stabilizedResults, getComparator(order, orderBy))
            .map((row, index) => {
              return <SearchResultsRow key={index} row={row as unknown as PropertyItem} />
            })
          }
        </Table>
      </TableContainer>
    </Condition>
  );
};

export default SearchResults;