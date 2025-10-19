export interface IHousesData{
    id:number;
    title:string;
    address:string;
    photos:string[] | null;
    rate:string | null;
    discounted_price:string | null;
    price:string;
    tags:string[];
    last_updated:string;
    capacity:number;
    location:{
        lat:string;
        lng:string;
    };
    categories:{
        id:number;
        name:string;
    };
    bathrooms:number;
    parking:number;
    rooms:number;
    yard_type:string;
    num_comments:number;
    discount_id:string;
    transaction_type:string;
    sellerId:string;
    sellerName:string;
    caption:string;
    bookings:number;
    favoriteId:number | string | null;
    isFavorite:boolean;

}
export interface IHouses{
    houses:IHousesData[];
    totalCount:number;
}