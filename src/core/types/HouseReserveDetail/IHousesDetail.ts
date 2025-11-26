export interface IHousesDetail{
    id: string,
    title: string,
    address: string,
    photos: string[] | null,
    rate: string | null,
    discounted_price: string | null,
    price: string,
    tags: string[],
    last_updated: string,
    capacity: 5,
    location: {
        lat: number,
        lng: number
    },
    categories: {
        "name": string
    },
    bathrooms: number,
    parking: number,
    rooms: number,
    yard_type: string,
    num_comments: number,
    discount_id: string | null,
    transaction_type: string,
    sellerId: string,
    sellerName: string,
    caption: string,
    favoriteId: string | null,
    bookings: number,
    isFavorite: boolean
}
