import { PropertyItem, RentPriceData } from '../utils/interfaces';
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

export const mockPropertyItems: PropertyItem[] = [
  {
    "property_id": "12940898",
    "price": "\u00a380,000",
    "address": "Farringdon Close, Holmewood, Bradford, BD4",
    "description": "2 bedroom terraced house for sale",
    "features": [
      "Tenure: Freehold",
      "Inner Town House",
      "2 Bedrooms",
      "Ideal for owner occupation or BTL"
    ],
    "tenure": "Freehold",
    "no_beds": "2",
    "no_baths": "1",
    "days_otm": "OnTheMarket today",
    "images": [
      "https://media.onthemarket.com/properties/12940898/1437004989/image-0-480x320.jpg",
      "https://media.onthemarket.com/properties/12940898/1437004989/image-1-480x320.jpg",
      "https://media.onthemarket.com/properties/12940898/1437004989/image-2-480x320.jpg",
      "https://media.onthemarket.com/properties/12940898/1437004989/image-3-480x320.jpg",
      "https://media.onthemarket.com/properties/12940898/1437004989/image-4-480x320.jpg"
    ],
    "href": "https://www.onthemarket.com/details/12940898/",
    "extra_details": [
      "Chain-free",
      "Added today",
      "Terraced house",
      "2 bed",
      "1 bath",
      "EPC rating: F*",
      "893 sq ft / 83 sq m",
      "Tenure: Freehold",
      "Inner Town House",
      "2 Bedrooms",
      "Ideal for owner occupation or BTL",
      "Has been successfully let for many years",
      "Anticpated rental figure of \u00a3600PCM",
      "NO CHAIN",
      "Sensibly priced to sell"
    ],
    "extra_description": "NO CHAIN: Ideal purchase for either owner occupier and or buy to let investor landlord. Inner town House, providing 2 Bedrooms. Has been successfully let for many years and situated on the fringe of the estate. We would advise a likely rental figure of \u00a3600PCM. The accommodation comprises: Hall, Lounge, Kitchen, 2 Bedrooms & Bathroom.",
    "stations": [
      {
        "name": "Bradford Interchange Station",
        "location_type": "station",
        "distance": "1.7mi."
      },
      {
        "name": "Bradford Forster Square Station",
        "location_type": "station",
        "distance": "2.0mi."
      },
      {
        "name": "New Pudsey Station",
        "location_type": "station",
        "distance": "2.1mi."
      }
    ],
    "schools": [
      {
        "name": "Carrwood Primary School",
        "location_type": "school",
        "distance": "0.3mi."
      },
      {
        "name": "Knowleswood Primary School",
        "location_type": "school",
        "distance": "0.4mi."
      },
      {
        "name": "Bradford Forster Academy",
        "location_type": "school",
        "distance": "0.5mi."
      }
    ],
    "current_date": "2023-03-08 10:15:44.391459"
  },
  {
    "property_id": "12941048",
    "price": "\u00a3129,950",
    "address": "Hill Top Lane, Allerton",
    "description": "3 bedroom semi-detached house for sale",
    "features": [
      "Tenure: Freehold",
      "Good sized three bedroom semi detached home"
    ],
    "tenure": "Freehold",
    "no_beds": "3",
    "no_baths": "1",
    "days_otm": "OnTheMarket today",
    "images": [
      "https://media.onthemarket.com/properties/12941048/1437010185/image-0-480x320.jpg",
      "https://media.onthemarket.com/properties/12941048/1437010185/image-1-480x320.jpg",
      "https://media.onthemarket.com/properties/12941048/1437010185/image-2-480x320.jpg",
      "https://media.onthemarket.com/properties/12941048/1437010185/image-3-480x320.jpg",
      "https://media.onthemarket.com/properties/12941048/1437010185/image-4-480x320.jpg"
    ],
    "href": "https://www.onthemarket.com/details/12941048/",
    "extra_details": [
      "Chain-free",
      "Added today",
      "Semi-detached house",
      "3 bed",
      "1 bath",
      "Tenure: Freehold",
      "Good sized three bedroom semi detached home",
      "Sought after location",
      "Gas heating & double glazing",
      "Gardens & driveway",
      "Offered for sale with no onward chain",
      "Viewing recommended"
    ],
    "extra_description": "An excellent value family home located on Hill Top Lane in Allerton, well placed for access to local amenities. Providing spacious three bedroom accommodation arranged over two floors  and including gas fired central heating and uPVC double glazing, the property in brief comprises: Entrance hall,  sizeable through lounge with windows to two elevations, spacious kitchen with a range of modern units, integral hob, oven and extractor. At first floor level there is a landing area, three good sized bedrooms, bathroom with bath with shower over and matching pedestal wash hand basin, and a separate w.c.Externally the property has gardens to three sides together with a tarmac driveway providing off road parking. The property is being offered for sale with no chain and will be of interest to a wide variety of buyers.Council tax band: A",
    "stations": [
      {
        "name": "Frizinghall Station",
        "location_type": "station",
        "distance": "2.7mi."
      },
      {
        "name": "Saltaire Station",
        "location_type": "station",
        "distance": "2.9mi."
      },
      {
        "name": "Shipley Station",
        "location_type": "station",
        "distance": "3.0mi."
      }
    ],
    "schools": [
      {
        "name": "Beckfoot Allerton Primary School and Nursery",
        "location_type": "school",
        "distance": "0.3mi."
      },
      {
        "name": "Ley Top Primary School",
        "location_type": "school",
        "distance": "0.3mi."
      },
      {
        "name": "The Academy At St. James",
        "location_type": "school",
        "distance": "0.5mi."
      }
    ],
    "current_date": "2023-03-08 10:15:44.984450"
  },
  {
    "property_id": "12940889",
    "price": "\u00a3125,000",
    "address": "Hodgson Lane, Drighlington, West Yorkshire, BD11",
    "description": "1 bedroom terraced house for sale",
    "features": [
      "End Through by light Terrace",
      "Well presented"
    ],
    "tenure": "Freehold",
    "no_beds": "1",
    "no_baths": "1",
    "days_otm": "OnTheMarket today",
    "images": [
      "https://media.onthemarket.com/properties/12940889/1437004760/image-0-480x320.jpg",
      "https://media.onthemarket.com/properties/12940889/1437004760/image-1-480x320.jpg",
      "https://media.onthemarket.com/properties/12940889/1437004760/image-2-480x320.jpg",
      "https://media.onthemarket.com/properties/12940889/1437004760/image-3-480x320.jpg",
      "https://media.onthemarket.com/properties/12940889/1437004760/image-4-480x320.jpg"
    ],
    "href": "https://www.onthemarket.com/details/12940889/",
    "extra_details": [
      "Chain-free",
      "Added today",
      "Terraced house",
      "1 bed",
      "1 bath",
      "EPC rating: D*",
      "559 sq ft / 52 sq m",
      "End Through by light Terrace",
      "Well presented",
      "1 Double Bedroom",
      "Potential to create 2nd Bedroom",
      "Ideal for owner occupier",
      "Perfect Buy to Let",
      "Has been successfully rented for many years",
      "Sought after location",
      "Energy Rating D"
    ],
    "extra_description": "NO CHAIN: Well presented END THROUGH BY LIGHT TERRACE. Situated in sought after area, close to both Leeds and Bradford. Ideal purchase for either OWNER OCCUPIER or BUY TO LET INVESTOR. Has been successfully rented for many years. Provides 1 DOUBLE BEDROOM, but could make it 2 bedrooms. NOT TO BE MISSED.",
    "stations": [
      {
        "name": "Morley Station",
        "location_type": "station",
        "distance": "3.3mi."
      },
      {
        "name": "Low Moor Station",
        "location_type": "station",
        "distance": "3.4mi."
      },
      {
        "name": "Batley Station",
        "location_type": "station",
        "distance": "3.5mi."
      }
    ],
    "schools": [
      {
        "name": "Drighlington Primary School",
        "location_type": "school",
        "distance": "0.4mi."
      },
      {
        "name": "Birkenshaw Church of England Voluntary Controlled Primary School",
        "location_type": "school",
        "distance": "0.8mi."
      },
      {
        "name": "Fieldhead Primary Academy",
        "location_type": "school",
        "distance": "0.9mi."
      }
    ],
    "current_date": "2023-03-08 10:15:44.960169"
  },
  {
    "property_id": "12940420",
    "price": "\u00a3260,000",
    "address": "High Ash Park, Allerton, Bradford, BD15",
    "description": "4 bedroom detached house for sale",
    "features": [
      "Tenure: Freehold",
      "DETACHED HOUSE"
    ],
    "tenure": "Freehold",
    "no_beds": "4",
    "no_baths": "1",
    "days_otm": "OnTheMarket yesterday",
    "images": [
      "https://media.onthemarket.com/properties/12940420/1436971628/image-0-480x320.jpg",
      "https://media.onthemarket.com/properties/12940420/1436971628/image-1-480x320.jpg",
      "https://media.onthemarket.com/properties/12940420/1436971628/image-2-480x320.jpg",
      "https://media.onthemarket.com/properties/12940420/1436971628/image-3-480x320.jpg",
      "https://media.onthemarket.com/properties/12940420/1436971628/image-4-480x320.jpg"
    ],
    "href": "https://www.onthemarket.com/details/12940420/",
    "extra_details": [
      "Added today",
      "Detached house",
      "4 bed",
      "1 bath",
      "Tenure: Freehold",
      "DETACHED HOUSE",
      "FOUR DOUBLE BEDROOMS",
      "TWO RECEPTION ROOMS",
      "GAS CENTRAL HEATING & DOUBLE GLAZING",
      "GARDEN & GARAGE",
      "EPC RATING D"
    ],
    "extra_description": "Day & Co are pleased to be marketing this four double bedroom detached family home situated in a sought after residential cul-de-sac location in Allerton. The property briefly comprises:Ground Floor - Entrance hallway with stairs leading to the first floor landing, cloakroom WC, living room with feature fireplace and french doors leading to the rear garden allowing dual aspect light into the living area, separate dining room / second reception room, fitted kitchen with side entrance to the driveway.First floor -\n Spacious landing with window to the front elevation, four double bedrooms (one with fitted wardrobes) and a four piece white family bathroom suite comprising: Panelled jacuzzi bath, wc, wash basin and separate shower cubicle.Gas central heating, double glazing.Outside -\n Driveway providing parking and leading to a good sized garage. Garden being mostly laid to lawn to the front and low maintenance garden to the rear with decked seating area.Viewing is highly recommended to appreciate the size and proportion on this family home.EPC Rating D",
    "stations": [
      {
        "name": "Saltaire Station",
        "location_type": "station",
        "distance": "2.9mi."
      },
      {
        "name": "Bingley Station",
        "location_type": "station",
        "distance": "2.9mi."
      },
      {
        "name": "Frizinghall Station",
        "location_type": "station",
        "distance": "2.9mi."
      }
    ],
    "schools": [
      {
        "name": "Beckfoot Allerton Primary School and Nursery",
        "location_type": "school",
        "distance": "0.6mi."
      },
      {
        "name": "Ley Top Primary School",
        "location_type": "school",
        "distance": "0.7mi."
      },
      {
        "name": "Sandy Lane Primary School",
        "location_type": "school",
        "distance": "0.7mi."
      }
    ],
    "current_date": "2023-03-08 10:15:44.935330"
  },
]