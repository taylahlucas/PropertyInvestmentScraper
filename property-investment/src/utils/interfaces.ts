export interface ItemProps {
  label: string;
  value: string | number;
}

export interface CitiesProps {
  name: string;
  towns: string[];
}

export interface LocationsProps {
  area: string;
  cities: CitiesProps[];
}

export interface PropertyItem {
  property_id: string;
  price: string;
  address: string;
  description: string;
  features: string[];
  tenure: string;
  no_beds: string;
  no_baths: string;
  days_otm: string;
  images: string[];
  href: string;
  extra_details: string[];
  extra_description: string;
  stations: LocationData[];
  schools: LocationData[];
  current_date: string;
};

export interface LocationData {
  name: string;
  location_type: string;
  distance: string;
}

interface PropertyCountType {
  no_beds: number;
  no_baths: number;
  property_type: string;
}

export interface RentPriceDataHeader {
  no_beds: number;
  no_baths: number;
  property_type: string;
  avg: number;
}

export interface BethBathPrices {
  bed_baths: PropertyCountType;
  prices: string[];
}

export interface RentPriceData {
  address: string;
  minBeds: string;
  rent_data: BethBathPrices[];
  current_date: string;
}

export interface RentPriceComparison {
  address: string;
  price: string;
  noBeds: number;
  noBaths: number;
  propType: PropertyType;
  timeOTM: string;
}

export interface SearchFormData {
  address?: string;
  price?: number;
  noBeds: number;
  noBaths: number;
  isFreehold: boolean;
  isChainfree: boolean;
}

export interface PriceHistoryData {
  title: string;
  description: string;
}

export type Order = 'asc' | 'desc';

export enum PropertyTypeEnum {
  'Detached House' = 'Detached House',
  'Semi-Detached House' = 'Semi-Detached House',
  'Terraced House' = 'Terraced House',
  'Bungalow' = 'Bungalow',
  'Apartment' = 'Apartment',
  'Flat' = 'Flat',
  'Maisonette' = 'Maisonette',
  'Duplex' = 'Duplex',
  'Cottage' = 'Cottage',
  'Mews House' = 'Mews House',
}

type PropertyType = 'Detached House'
  | 'Semi-Detached House'
  | 'Terraced House'
  | 'Bungalow'
  | 'Apartment'
  | 'Flat'
  | 'Maisonette'
  | 'Duplex'
  | 'Cottage'
  | 'Mews House'