import { IHouses } from '@/core/types/LandingPage/IHouses';
import { FC } from 'react';
import HouseCard from './HouseCard/HouseCard';
import HouseLocation from './HouseLocation/HouseLocation';
import Sort from './Sort/Sort';

interface IProps {
  houseDetail: IHouses;
}

const HouseReserveSection: FC<IProps> = ({ houseDetail }) => {

  return (
    <div className='max-w-full w-full bg-[#303030] rounded-[20px] md:rounded-[40px] mt-4 md:mt-6 p-4 md:p-5 lg:p-6'>
      <div className='flex flex-col lg:flex-row w-full h-full gap-4 md:gap-6'>
        <div
          style={{ direction: "ltr" }}
          className='flex-2 w-full lg:max-w-[1015px] max-h-[600px] lg:max-h-[1080px] overflow-y-auto overflow-x-hidden custom-scrollbar p-2'
        >
          <Sort />
          <div className='w-full border dark:border-[#4E4E4E] border-[#9E9E9E] my-4'></div>
          <div
            style={{ direction: "rtl" }}
            className='flex flex-col gap-4 md:gap-6 relative cursor-pointer'
          >
            {houseDetail.totalCount === 0 ? (
              <h1 className="flex justify-center w-full text-white font-[600]">
                درحال حاضر هیچ خانه‌ای مطابق با فیلتر وجود ندارد
              </h1>
            ) : (
              houseDetail.houses.map((value, index) => (
                <HouseCard key={index} value={value} />
              ))
            )}
          </div>
        </div>
        <div className='flex-1 w-full lg:w-auto h-[400px] md:h-[200px] lg:h-[1080px] mt-4 lg:mt-0'>
          <div className='w-full h-full'>
            <HouseLocation houseLocations={houseDetail} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HouseReserveSection;