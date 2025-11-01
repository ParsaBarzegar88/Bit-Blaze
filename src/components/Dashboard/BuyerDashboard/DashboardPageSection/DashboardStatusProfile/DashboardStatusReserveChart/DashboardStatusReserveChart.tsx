'use client';

import { IDashboardMarketTrends } from '@/core/types/Dashboard/IDashboard'
import React, { FC, useMemo, useState, useEffect } from 'react'
import { FaBookmark } from 'react-icons/fa6'
import dynamic from 'next/dynamic'

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false })

interface IProps {
    dashboardMarketTrendsInfo: IDashboardMarketTrends[]
}

const DashboardStatusReserveChart: FC<IProps> = ({ dashboardMarketTrendsInfo }) => {
    const [isDark, setIsDark] = useState(false)
    useEffect(() => {
        const observer = new MutationObserver(() => {
            setIsDark(document.documentElement.classList.contains('dark'))
        })
        observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] })
        setIsDark(document.documentElement.classList.contains('dark'))
        return () => observer.disconnect()
    }, [])

    const chartData = useMemo(() => {
        const sorted = [...dashboardMarketTrendsInfo].sort((a, b) => a.month.localeCompare(b.month))
        return {
            categories: sorted.map(item => item.month.replace('-', '/')),
            series: sorted.map(item => parseInt(item.bookingCount, 10))
        }
    }, [dashboardMarketTrendsInfo])

    const chartOptions: ApexCharts.ApexOptions = {
        chart: {
            type: 'area',
            height: 250,
            toolbar: { show: false },
            zoom: { enabled: false },
            foreColor: isDark ? '#E5E7EB' : '#374151',
        },
        stroke: { curve: 'smooth', width: 3 },
        fill: {
            type: 'gradient',
            gradient: {
                shadeIntensity: 1,
                opacityFrom: 0.7,
                opacityTo: 0.3,
                stops: [0, 90, 100]
            }
        },
        colors: ['#60A5FA'],
        xaxis: {
            categories: chartData.categories,
            labels: {
                style: {
                    colors: isDark ? '#9CA3AF' : '#6B7280',
                    fontSize: '12px',
                    fontFamily: "IRANSansXFaNum"

                }
            },
            axisBorder: { show: false },
            axisTicks: { show: false },
        },
        yaxis: {
            labels: {
                style: {
                    colors: isDark ? '#9CA3AF' : '#6B7280',
                    fontSize: '12px',
                    fontFamily: "IRANSansXFaNum"
                },
                formatter: (val) => val.toFixed(0)
            },
            min: 0,
        },
        grid: {
            borderColor: isDark ? '#F1F1F1' : '#909091',
            strokeDashArray: 5,
            xaxis: { lines: { show: false } },
            yaxis: { lines: { show: true } },
        },
        tooltip: {
            theme: isDark ? 'dark' : 'light',
            y: { formatter: (val) => `${val} reserve` }
        },
        dataLabels: { enabled: false },
    }

    const series = [{ name: 'BookingCount ', data: chartData.series }]

    return (
        <div className='
            bg-white dark:bg-[#363636]
            shadow-[0_5px_10px_rgba(0,0,0,0.1)] dark:shadow-[0_5px_10px_rgba(0,0,0,0.3)]
            rounded-[12px]
            transition-all duration-300 
            hover:shadow-[0_8px_15px_rgba(0,0,0,0.15)] dark:hover:shadow-[0_8px_15px_rgba(0,0,0,0.4)]
            p-4
        '>
            <div className='flex flex-col gap-1.5'>
                <div className='flex items-center gap-2.5'>
                    <FaBookmark size={24} />
                    <span className='text-black dark:text-white text-xl font-normal'>نمودار رزرو های شما</span>
                </div>
                <div className='w-full my-2 border-t border-dashed border-gray-300 dark:border-gray-600'></div>

                <div className='mt-2 -mx-4 -mb-4'>
                    <Chart options={chartOptions} series={series} type="area" height={250} />
                </div>
            </div>
        </div>
    )
}

export default DashboardStatusReserveChart