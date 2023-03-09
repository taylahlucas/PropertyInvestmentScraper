import { PropertyItem, RentPriceData } from './interfaces';

export interface ItemProps {
  label: string;
  value: string | number;
}

export const valueArray: ItemProps[] = [0, 1, 2, 3, 4, 5].map((index: number) => ({
  label: index.toString(),
  value: index
}))


export const areas: string[] = [];

export const MAX_DESCRIPTION_HEIGHT = 300;
export const MAX_DESCRIPTION_WIDTH = 400;

export const emptyPropertyData: PropertyItem[] = [{
  property_id: '',
  price: '',
  address: '',
  description: '',
  features: [],
  tenure: '',
  no_beds: '',
  no_baths: '',
  days_otm: '',
  images: [],
  href: '',
  extra_details: [],
  extra_description: '',
  stations: [],
  schools: [],
  current_date: ''
}]

export const emptyRentalPriceData: RentPriceData = {
  address: '',
  minBeds: '',
  rent_data: [],
  current_date: ''
}