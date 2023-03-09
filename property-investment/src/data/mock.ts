import { PropertyItem } from '../utils/interfaces';
import { Tenure } from '../utils/enums';

export function createMockTableData({
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

export const mockDataRows = [
  createMockTableData({
    property_id: '1',
    price: '£800,000', 
    address: 'Avro, Binns Place, Manchester, M4', 
    description: '2 bedroom apartment for sale',
    features: ['Infusion of character and modern luxury', 'Parking included'], 
    tenure: Tenure.Freehold.toString(), 
    no_beds: '2', 
    no_baths: '2', 
    days_otm: 'OnTheMarket > 14 days',
    images: ["https://media.rightmove.co.uk/dir/126k/125134/124426958/125134_4972_ALIS_IMG_00_0000_max_296x197.jpeg", "https://media.rightmove.co.uk/dir/82k/81832/85385742/81832_HMR220211_IMG_00_0000_max_296x197.jpeg", "https://media.rightmove.co.uk/dir/126k/125134/124426958/125134_4972_ALIS_IMG_00_0000_max_296x197.jpeg", "https://media.rightmove.co.uk/dir/82k/81832/85385742/81832_HMR220211_IMG_00_0000_max_296x197.jpeg", "https://media.rightmove.co.uk/dir/126k/125134/124426958/125134_4972_ALIS_IMG_00_0000_max_296x197.jpeg", "https://media.rightmove.co.uk/dir/82k/81832/85385742/81832_HMR220211_IMG_00_0000_max_296x197.jpeg"],
    href:'',
    extra_details:[],
    extra_description:'',
    stations:[],
    schools:[],
    current_date:''
  }),
  createMockTableData({
    property_id: '2',
    price: '£900,000', 
    description: '2 bedroom apartment for sale',
    address: 'Avro, Binns Place, Manchester, M4', 
    features: ['Infusion of character and modern luxury', 'Parking included'], 
    tenure: Tenure.Freehold.toString(), 
    no_beds: '2', 
    no_baths: '2', 
    days_otm: 'OnTheMarket > 14 days',
    images: ["https://media.rightmove.co.uk/dir/78k/77902/96542872/77902_11479301_IMG_00_0000_max_296x197.jpeg"],
    href:'',
    extra_details:[],
    extra_description:'',
    stations:[],
    schools:[],
    current_date:''
  })
];