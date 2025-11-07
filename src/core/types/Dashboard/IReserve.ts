export interface IUserReserve {
  id: number;
  user_id: number;
  houseId: number;
  reservedDates: [
    {
      value: string;
      inclusive: true;
    },
    {
      value: string;
      inclusive: false;
    }
  ];
  traveler_details: [
    {
      gender: string;
      lastName: string;
      birthDate: string;
      firstName: string;
      nationalId: string;
    }
  ];
  status: string;
  sharedEmail: string;
  sharedMobile: string;
  createdAt: string;
  updatedAt: string;
  house: {
    title: string;
    price: number;
  };
  houseDetail: {
    id: string;
    title: string;
    address: string;
    photos: string[] | null;
    rate: string | null;
    discounted_price: string | null;
    price: string;
    tags: string[];
    last_updated: string;
    capacity: 5;
    location: {
      lat: number;
      lng: number;
    };
    categories: {
      name: string;
    };
    bathrooms: number;
    parking: number;
    rooms: number;
    yard_type: string;
    num_comments: number;
    discount_id: string | null;
    transaction_type: string;
    sellerId: string;
    sellerName: string;
    caption: string;
    favoriteId: string | null;
    bookings: number;
    isFavorite: boolean;
  };
}

export interface IUserReserves {
  data: IUserReserve[];
  totalCount: number;
}
