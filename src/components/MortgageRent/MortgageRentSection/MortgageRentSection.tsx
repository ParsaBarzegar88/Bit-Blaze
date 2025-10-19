'use client'
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationNext,
    PaginationPrevious
} from '@/components/ui/pagination';
import { IHouses } from '@/core/types/MortgageRent/IHouses';
import { useRouter, useSearchParams } from 'next/navigation';
import { FC } from 'react';
import MortgageRentList from './MortgageRentList/MortgageRentList';

interface IProps {
    houses: IHouses;
}

const ITEMS_PER_PAGE = 6;

const MortgageRentSection: FC<IProps> = ({ houses }) => {
    const router = useRouter();
    const searchParams = useSearchParams();

    const currentPage = parseInt(searchParams.get('page') || '1' , 10);

    const totalPages = Math.ceil(houses.totalCount / ITEMS_PER_PAGE);

    const goToPage = (page: number) => {
        if (page >= 1 && page <= totalPages) {
            const newParams = new URLSearchParams(searchParams);
            newParams.set('page', page.toString());
            router.push(`?${newParams.toString()}`);
        }
    };

    return (
        <div className="flex flex-col mb-10 mt-8 w-full">
            <div className="flex flex-row justify-between gap-4 flex-wrap w-full">
                {houses.totalCount === 0 ? (
                    <h1 className="flex justify-center w-full text-white font-[600]">
                        درحال حاضر هیچ خانه‌ای مطابق با فیلتر وجود ندارد
                    </h1>
                ) : (
                    houses.houses.map((houseData, index) => (
                        <MortgageRentList key={index} houseData={houseData} />
                    ))
                )}
            </div>
            {totalPages > 1 && (
                <Pagination dir="ltr" className='mt-10'>
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
                                            ? 'bg-[#8CFF45] !text-black'
                                            : 'bg-[#393939] hover:bg-[#4a4a4a]'
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
        </div>
    );
};

export default MortgageRentSection;