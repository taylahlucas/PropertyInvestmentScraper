import { Button, TableContainer, Table } from '@mui/material';
import RentalPricesRow from './RentalPricesRow';
import Condition from '../general/Condition';
import LoadingPage from '../layouts/LoadingPage';
import NoResultsPage from '../layouts/NoResultsPage';
import React, { useState } from 'react';
import RentalPricesHeaderFilter from './RentalPricesHeaderFilter';
import { RentPriceDataHeader, Order, PriceHistoryData } from '../../utils/interfaces';
import { stableSort, getComparator } from '../../data/functions';

interface RentalPricesProps {
  results?: RentPriceDataHeader[];
  historyResults?: PriceHistoryData;
}

const RentalPrices = ({ results, historyResults }: RentalPricesProps): JSX.Element => {
  const [order, setOrder] = useState<Order>('asc');
  const [orderBy, setOrderBy] = useState<keyof RentPriceDataHeader>('avg');

  const handleRequestSort = (
    event: React.MouseEvent<unknown>,
    property: keyof RentPriceDataHeader
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
      <TableContainer style={{ maxHeight: 200, overflow: 'scroll' }}>
        <Table aria-label="collapsible table">
          <RentalPricesHeaderFilter 
            order={order}
            orderBy={orderBy}
            onRequestSort={handleRequestSort}
            rowCount={results?.length ?? 0}
          />
          {stableSort(stabilizedResults, getComparator(order, orderBy))
            .map((row, index) => {
              return <RentalPricesRow key={index} row={row as unknown as RentPriceDataHeader} />
            })
          }
        </Table>
      </TableContainer>
    </Condition>
  );
};

export default RentalPrices;