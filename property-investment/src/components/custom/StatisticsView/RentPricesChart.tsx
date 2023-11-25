import BarChart from "@/components/general/Charts/BarChart";
import { rentPrices } from '../../../data/mock/rentPrices';
import { PropertyTypeEnum, RentPriceComparison } from '../../../utils/interfaces';
import { convertPriceToNumber, calculateAverage } from '../../../data/functions';

// TODO: Fix here, i.e. avg price for 1 bedroom Maisonette
export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Chart.js Bar Chart',
    },
  },
};

function filterForPrices(data: RentPriceComparison[], filterValue: number): number {
  const filteredData = data.filter(item => item.noBeds === filterValue) ?? [];
  const avgValues: number[] = [];
  filteredData.forEach(item => {
    avgValues.push(convertPriceToNumber(item.price))
  })
  return calculateAverage(avgValues) ?? 0;
}

interface DatasetProps {
  label: string;
  data: number;
  backgroundColor: string; 
}

const datasets: DatasetProps[] = [
  {
    label: '1 Bed',
    data: filterForPrices(rentPrices, 1),
    backgroundColor: 'red'
  },
  {
    label: '2 Bed',
    data: filterForPrices(rentPrices, 2),
    backgroundColor: 'blue'
  },
  {
    label: '3 Bed',
    data: filterForPrices(rentPrices, 3),
    backgroundColor: 'green'
  },
];

console.log("TEST 2: ", datasets)
const labels = Object.values(PropertyTypeEnum);
export const data = {
  labels,
  datasets
};

const RentPricesChart = () => {
  return (
    <BarChart options={options} data={data} />
  );
};

export default RentPricesChart;