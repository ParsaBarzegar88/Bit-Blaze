import React, { FC } from 'react'
import { IUserDetail } from '@/core/types/Dashboard/IDashboard';
import DashboardIncomeStatistic from './DashboardIncomeStatistic/DashboardIncomeStatistic';
import DashboardProfileInformation from './DashboardProfileInformation/DashboardProfileInformation';

interface IProps{
    userInfo: IUserDetail
}
const DashboardStatusProfile:FC<IProps> = ({userInfo}) => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 w-full'>
            <DashboardIncomeStatistic/>
            <DashboardProfileInformation userInfo={userInfo}/>
        </div>
    )
}

export default DashboardStatusProfile