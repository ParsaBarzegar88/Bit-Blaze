export interface IPersonalInfo {
  id: string;
  firstName: string;
  lastName: string;
  gender: "male" | "female";
  nationalCode: string;
  birthDate: Date | null | string;
}

export interface IBookingData {
  info: {
    id: number;
    title: string;
    address: string;
    photos: string[] | null;
    rate: string | null;
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
      id: number;
      name: string;
    };
    bathrooms: number;
    parking: number;
    rooms: number;
    yard_type: string;
    num_comments: number;
    discount_id: string;
    transaction_type: string;
    sellerId: string;
    sellerName: string;
    caption: string;
    bookings: number;
    favoriteId: number | string | null;
    isFavorite: boolean;
  };
  selectedDepartureDay: number;
  selectedReturnDay: number;
  guestCount: number;
  personalInfo: IPersonalInfo[];
  shareMobile: string;
  shareEmail: string;
}

export interface ISendBookingHouseToApi {
  data:{
    houseId: string;
    reservedDates: [
      string,
      string
    ];
    traveler_details: [
      {
        firstName: string;
        lastName: string;
        gender: string;
        birthDate: string;
        nationalId: string;
      }
    ];
    sharedEmail: string;
    sharedMobile: string;
  }
}
