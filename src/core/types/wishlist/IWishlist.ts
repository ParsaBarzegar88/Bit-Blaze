import { IHouseCompare } from "../HouseCompare/IHouseCompare";

export interface IWishlistItem {
    id: number;
    userId: number;
    houseId: number;
    note: string;
    createdAt: string;
    house: IHouseCompare[];

}

export interface IWishlist {
    data: IWishlistItem[];
    totalCount: number;

}

export interface IAddWishlist {
    houseId: string;
    note: string;
    
}
