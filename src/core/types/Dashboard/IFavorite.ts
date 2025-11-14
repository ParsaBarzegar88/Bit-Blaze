export interface IUserFavorite {
  id: string;
  user_id: string;
  house_id: string;
  createdAt: string;
  updatedAt: string;
  house: {
    id: string;
    title: string;
    address: string;
    photos: string[];
    rate: string;
    price: string;
  };
}

export interface IUserFavorites {
  data: IUserFavorite[];
  totalCount: number;
}
