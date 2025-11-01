import React, { FC } from 'react'
import { IDashboardMarketTrends, IUserDetail } from '@/core/types/Dashboard/IDashboard';
import DashboardStatusReserveChart from './DashboardStatusReserveChart/DashboardStatusReserveChart';
import DashboardProfileInformation from './DashboardProfileInformation/DashboardProfileInformation';

interface IProps{
    dashboardMarketTrendsInfo:IDashboardMarketTrends[];
    userInfo: IUserDetail
}
const DashboardStatusProfile:FC<IProps> = ({dashboardMarketTrendsInfo , userInfo}) => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 w-full'>
            <DashboardStatusReserveChart dashboardMarketTrendsInfo={dashboardMarketTrendsInfo}/>
            <DashboardProfileInformation userInfo={userInfo}/>
        </div>
    )
}

export default DashboardStatusProfile