export interface IHouseCompare {
  id: string;
  title: string;
  address: string;
  photos: string[] | null;
  rate: string;
  discounted_price: string | null;
  price: string;
  tags: string[];
  last_updated: string;
  capacity: number;
  location: {
    lat: string;
    lng: string;
  };
  categories: {
    name: string;
  };
  bathrooms: number;
  parking: number;
  rooms: number;
  yard_type: string;
  num_comments: number;
  discount_id: null;
  transaction_type: string;
  sellerId: string;
  sellerName: string;
  caption: string;
}
