import React, { FC } from 'react'
import PaymentsFilter from './PaymentsFilter/PaymentsFilter'
import PaymentList from './PaymentList/PaymentList'
import PaymentPagination from './PaymentPagination/PaymentPagination'
import FinancialManagementSummery from './FinancialManagementSummery/FinancialManagementSummery'
import { getDashboardFinance } from '@/core/api/SellerDashboard/Dashboard'
import { getAllCustomerPayments } from '@/core/api/SellerDashboard/FinancialManagement'

interface IProps {
    searchParams?: { [key: string]: string }
}
const DashboardPaymentsPageSection:FC<IProps> = async ({searchParams}) => {
    const userPayments = await getAllCustomerPayments(searchParams)
    const dashboardSummery = await getDashboardFinance()
    return (
        <div className='flex flex-col w-full gap-3 h-full overflow-x-auto bg-none shadow-none'>
            <FinancialManagementSummery dashboardSummeryInfo={dashboardSummery}/>
            <div className='flex flex-col w-full gap-3 px-3 py-3 sm:max-h-full md:max-h-full lg:max-h-full h-full overflow-x-auto custom-scrollbar overflow-y-auto bg-white dark:bg-[#363636]
                shadow-[0_5px_10px_rgba(0,0,0,0.1)] dark:shadow-[0_5px_10px_rgba(0,0,0,0.3)]
                rounded-[12px] 
                transition-all duration-300 
                hover:shadow-[0_8px_15px_rgba(0,0,0,0.15)] dark:hover:shadow-[0_8px_15px_rgba(0,0,0,0.4)]'>
                <PaymentsFilter totalCount={userPayments.totalCount}/>
                <div className='w-full mt-2 mb-2 border-t border-gray-300 dark:border-white border-dashed transition-colors duration-300'></div>
                <div className='flex flex-col h-full justify-between'>
                    <PaymentList userPaymentInfo={userPayments} />
                    <PaymentPagination userPaymentCount={userPayments} />
                </div>
            </div>
        </div>
    )
}

export default DashboardPaymentsPageSection