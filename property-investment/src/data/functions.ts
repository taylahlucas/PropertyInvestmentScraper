import locations from './locations.json';
import { CitiesProps, LocationsProps, SearchFormData, Order, PropertyItem, RentPriceDataHeader } from '../utils/interfaces';

export const generateAddresses = () => {
  const addresses: string[] = [];
  
  locations.map(({ area, cities }: LocationsProps) => {
    cities.map(({ name, towns }: CitiesProps) => {
      towns.map(town => {
        addresses.push(
          `${town}, ${name}, ${area}`
        )
      })
    });
  });
  return addresses;
};

export const searchAddressData = generateAddresses();

export const filterSearchData = (query: string, data: string[]) => {
  if (query.length < 3) {
    return [];
  } 
  else {
    return data.filter((d) => d.toLowerCase().includes(query.toLowerCase()));
  }
};

export const convertPriceToNumber = (price: string): number => {
  return Number(price.replace('.', '').replace(',', '')) ?? 0
};

export const formDataIsValid = (formData: SearchFormData): boolean => {
  return (!!formData.address && !!formData.price)
};

export function stableSort<T>(array: readonly T[], comparator: (a: T, b: T) => number) {
  const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

export function getComparator<Key extends keyof any>(
  order: Order,
  orderBy: Key,
): (
  a: { [key in Key]: number | string },
  b: { [key in Key]: number | string },
) => number {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

export function calculateAverage(prices: number[]) { 
  if (prices.length > 1) {
    const average: number = Math.floor(prices.reduce((a, b) => a + b, 0) / prices.length);
    return average
  }
  else {
    return prices[0]
  }
}

export function createTableData({
  property_id,
  price,
  address,
  description,
  features,
  tenure,
  no_beds,
  no_baths,
  days_otm,
  images,
  href,
  extra_details,
  extra_description,
  stations,
  schools,
  current_date
}: PropertyItem) {
  return {
    property_id,
    price,
    address,
    description,
    features,
    tenure,
    no_beds,
    no_baths,
    days_otm,
    images,
    href,
    extra_details,
    extra_description,
    stations,
    schools,
    current_date
  }
};

export function createRentPricesTableData({
   no_beds,
   no_baths,
   property_type,
   avg,
}: RentPriceDataHeader) {
  return {
    no_beds,
    no_baths,
    property_type,
    avg,
  }
};