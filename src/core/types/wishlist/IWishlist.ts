export interface IAddWishlist {
    houseId: string;
    note: string;
    
}
export interface IHouse {
    id: string;
    title: string;
    address: string;
    photos: string[] | null;
    price: string;
    sellerName: string;
}

export interface IWishlistItem {
    id: number;
    userId: number;
    houseId: number;
    note: string;
    createdAt: string;
    updatedAt: string;
    house: IHouse;
}

export interface IWishlist {
    data: IWishlistItem[];
    totalCount: number;
}