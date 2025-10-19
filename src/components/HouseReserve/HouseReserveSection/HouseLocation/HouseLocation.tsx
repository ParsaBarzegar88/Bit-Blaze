/* eslint-disable */
'use client';

import 'leaflet/dist/leaflet.css';
import { IHouses } from '@/core/types/LandingPage/IHouses';
import dynamic from 'next/dynamic';
import { FC, useEffect, useState } from 'react';
import { useHouse } from '@/context/HouseContext';

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
const Popup = dynamic(
  () => import('react-leaflet').then((mod) => mod.Popup),
  { ssr: false }
);

interface IProps {
  houseLocations: IHouses
}

const HouseLocation: FC<IProps> = ({ houseLocations }) => {
  const { location, setLocation } = useHouse();
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


  const clearLocation = () => {
    setLocation({ lat: "", lng: "" });
  };

  if (!isClient) {
    return (
      <div className="w-full max-w-[100%] h-[1032px] rounded-[40px] 
                      bg-gradient-to-br from-blue-500/10 to-purple-500/10 
                      border-2 border-blue-200/50 shadow-2xl flex items-center justify-center">
        <p className="text-white font-vazir text-lg">در حال بارگذاری نقشه...</p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-[100%] h-[1032px] rounded-[40px] 
                    bg-gradient-to-br from-blue-500/10 to-purple-500/10 
                    border-2 border-blue-200/50 shadow-2xl relative">

      {location.lat && location.lng && (
        <button
          onClick={clearLocation}
          className="absolute top-4 right-4 z-[1000] bg-red-500 text-white 
                    w-10 h-10 rounded-full flex items-center justify-center 
                    shadow-lg hover:bg-red-600 transition-all duration-200"
        >
          ×
        </button>
      )}

      <MapContainer
        center={location.lat && location.lng ? [Number(location.lat), Number(location.lng)] : [35.6892, 51.3890]}
        zoom={12}
        className="w-full h-full rounded-[40px] shadow-inner"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; OpenStreetMap contributors'
        />

        {location.lat && location.lng ? (
          <Marker position={[Number(location.lat), Number(location.lng)]}>
            <Popup className="p-4 rounded-xl bg-green-100 border-green-300">
              <div className="text-right font-vazir text-sm">
                <h3 className="font-bold text-green-600 mb-2">خونه انتخاب شده!</h3>
                <p className="text-gray-700">نقشه روی این خونه زوم شد</p>
              </div>
            </Popup>
          </Marker>
        ) : (
          houseLocations?.houses?.map((item, key) => (
            <Marker
              key={key}
              position={[Number(item.location.lat), Number(item.location.lng)]}
            >
              <Popup className="p-4 rounded-xl bg-white/95 backdrop-blur-sm 
                                border border-gray-200 shadow-lg min-w-[250px]">
                <div className="text-right font-vazir text-sm">
                  <h3 className="font-bold text-blue-600 mb-2">{item.title}</h3>
                  <p className="text-gray-700 mb-2">{item.address}</p>
                  <span className="text-green-600 font-semibold">
                    {item.price?.toLocaleString()} تومان
                  </span>
                </div>
              </Popup>
            </Marker>
          ))
        )}
      </MapContainer>
    </div>
  );
};

export default HouseLocation;