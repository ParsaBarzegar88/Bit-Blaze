/* eslint-disable */
'use client';
import React from 'react'
import 'leaflet/dist/leaflet.css';
import dynamic from 'next/dynamic';
import { FC, useEffect, useState } from 'react';
import { IHousesDetail } from '@/core/types/MortgageRent/IHousesDetail';

const MapContainer = dynamic(
    () => import('react-leaflet').then((mod) => mod.MapContainer),
    { ssr: false }
);
const TileLayer = dynamic(
    () => import('react-leaflet').then((mod) => mod.TileLayer),
    { ssr: false }
);
const Marker = dynamic(
    () => import('react-leaflet').then((mod) => mod.Marker),
    { ssr: false }
);
interface IProps {
    houseLocations: IHousesDetail
}
const HouseLocationTab: FC<IProps> = ({ houseLocations }) => {
    const [isClient, setIsClient] = useState(false);
    useEffect(() => {
        setIsClient(true);

        if (typeof window !== 'undefined') {
            const setupLeaflet = async () => {
                const L = await import('leaflet');

                delete (L.Icon.Default.prototype as any)._getIconUrl;
                L.Icon.Default.mergeOptions({
                    iconRetinaUrl: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjUiIGhlaWdodD0iMjUiIHZpZXdCb3g9IjAgMCAyNSAyNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMTIuNSIgY3k9IjEyLjUiIHI9IjEyLjUiIGZpbGw9IiMyNzUzRkYiLz4KPHBhdGggZD0iTTEyLjUgNkwxOCAxMi41SDE3VjE5SDE0VjE1SDExVjE5SDhWMTIuNUg3TDEyLjU2IDZaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4=',
                    iconUrl: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjUiIGhlaWdodD0iMjUiIHZpZXdCb3g9IjAgMCAyNSAyNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMTIuNSIgY3k9IjEyLjUiIHI9IjEyLjUiIGZpbGw9IiMyNzUzRkYiLz4KPHBhdGggZD0iTTEyLjUgNkwxOCAxMi41SDE3VjE5SDE0VjE1SDExVjE5SDhWMTIuNUg3TDEyLjU2IDZaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4=',
                    shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
                });
            };
            setupLeaflet();
        }
    }, []);
    if (!isClient) {
        return (
            <div className="max-w-[100%] w-full lg:w-[670px] h-[320px] rounded-[40px] 
                      bg-gradient-to-br from-blue-500/10 to-purple-500/10 
                      border-2 border-blue-200/50 shadow-2xl flex items-center justify-center">
                <p className="text-white font-vazir text-lg">در حال بارگذاری نقشه...</p>
            </div>
        );
    }
    return (
        <div className='flex flex-col lg:flex-row gap-3 w-full'>
            <MapContainer
                center={houseLocations.location.lat && houseLocations.location.lng ? [Number(houseLocations.location.lat), Number(houseLocations.location.lng)] : [35.6892, 51.3890]}
                zoom={11}
                className="w-full lg:w-[670px] h-[320px] rounded-[37px] dark:shadow-none shadow-[0px_0px_16px_rgba(0,0,0,0.27)]"
            >
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; OpenStreetMap contributors'
                />
                <Marker position={[Number(houseLocations.location.lat), Number(houseLocations.location.lng)]}></Marker>
            </MapContainer>
            <div className='dark:text-[#AAAAAA] text-[16px] text-black'>{houseLocations.address}</div>
        </div>
    )
}

export default HouseLocationTab