export interface IUpdateHouse {
  title: string,
  address: string,
  rate: number,
  price: number,
  photos: string[],
  tags: string[],
  last_updated: Date,
  capacity: string,
  location: {
    lat: number,
lng: number
  },
  categories: {
    name: string
  },
bathrooms: number,
  parking: number,
  rooms: number,
  yard_type: string,
  num_comments: number,
  transaction_type: string,
  caption: string|null
}