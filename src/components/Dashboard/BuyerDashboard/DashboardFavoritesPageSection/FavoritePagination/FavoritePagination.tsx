'use client'
import React, { FC } from 'react'

import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationNext,
    PaginationPrevious
} from '@/components/ui/pagination';
import { useRouter, useSearchParams } from 'next/navigation';
import { IUserFavorites } from '@/core/types/Dashboard/IFavorite';

const ITEMS_PER_PAGE = 5;

interface IProps {
    userFavoriteCount: IUserFavorites
}
const FavoritePagination: FC<IProps> = ({ userFavoriteCount }) => {

    const router = useRouter();
    const searchParams = useSearchParams();

    const currentPage = parseInt(searchParams.get('page') || '1', 10);

    const totalPages = Math.ceil(userFavoriteCount.totalCount / ITEMS_PER_PAGE);

    const goToPage = (page: number) => {
        if (page >= 1 && page <= totalPages) {
            const newParams = new URLSearchParams(searchParams);
            newParams.set('page', page.toString());
            router.push(`?${newParams.toString()}`);
        }
    };
    return (
        <>
            {totalPages > 1 && (
                <Pagination dir="ltr" className='mt-6'>
                    <PaginationContent>
                        <PaginationItem>
                            <PaginationPrevious
                                onClick={() => goToPage(currentPage - 1)}
                                className={currentPage === 1 ? 'pointer-events-none opacity-50' : 'cursor-pointer'}
                            />
                        </PaginationItem>
                        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                            <PaginationItem key={page}>
                                <button
                                    onClick={() => goToPage(page)}
                                    className={`px-3 py-1 cursor-pointer rounded-md w-[37px] h-[37px] text-white ${currentPage === page
                                        ? 'dark:bg-[#8CFF45] bg-[#66b436] text-white dark:!text-black'
                                        : 'dark:bg-[#393939] bg-[#5f5f5f] hover:bg-[#4a4a4a] dark:hover:bg-[#4a4a4a]'
                                        }`}
                                >
                                    {page}
                                </button>
                            </PaginationItem>
                        ))}
                        <PaginationItem>
                            <PaginationNext
                                onClick={() => goToPage(currentPage + 1)}
                                className={currentPage === totalPages ? 'pointer-events-none opacity-50' : 'cursor-pointer'}
                            />
                        </PaginationItem>
                    </PaginationContent>
                </Pagination>
            )}
        </>
    )
}

export default FavoritePagination