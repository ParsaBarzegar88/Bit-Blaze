import React, { FC } from 'react'
import { getUserWishlist } from '@/core/api/wishlist/wishlist'
import WishList from './WishList/WishList'
import WishlistPagination from './WishlistPagination/WishlistPagination'

interface IProps {
    searchParams?: { [key: string]: string }
}
const DashboardWishListPageSection:FC<IProps> = async ({searchParams}) => {
    const userWishList = await getUserWishlist(searchParams)
    return (
        <div className='flex flex-col w-full gap-3 px-3 py-3 sm:max-h-full md:max-h-full lg:max-h-full h-full overflow-x-auto custom-scrollbar overflow-y-auto bg-white dark:bg-[#363636]
            shadow-[0_5px_10px_rgba(0,0,0,0.1)] dark:shadow-[0_5px_10px_rgba(0,0,0,0.3)]
            rounded-[12px] 
            transition-all duration-300 
            hover:shadow-[0_8px_15px_rgba(0,0,0,0.15)] dark:hover:shadow-[0_8px_15px_rgba(0,0,0,0.4)]'>
            <div className='w-full mt-2 mb-2 border-t border-gray-300 dark:border-white border-dashed transition-colors duration-300'></div>
            <div className='flex flex-col h-full justify-between'>
                <WishList userWishListInfo={userWishList}/>
                <WishlistPagination userWishListCount={userWishList} />
            </div>
        </div>
    )
}

export default DashboardWishListPageSection