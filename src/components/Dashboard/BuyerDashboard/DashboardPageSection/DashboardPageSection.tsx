import React from 'react'
import DashboardSummery from './DashboardSummery/DashboardSummery'
import { getDashboardSummery } from '@/core/api/Dashboard/Dashboard'

const DashboardPageSection = async () => {
  const dashboardSummery = await getDashboardSummery()
  return (
    <div className='flex flex-col w-full'>
      <DashboardSummery dashboardSummeryInfo={dashboardSummery}/>
    </div>
  )
}

export default DashboardPageSection