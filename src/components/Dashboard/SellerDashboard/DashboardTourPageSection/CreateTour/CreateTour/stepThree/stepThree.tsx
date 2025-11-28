/* eslint-disable */
"use client";
import React, { FC, useEffect, useState } from "react";
import "leaflet/dist/leaflet.css";
import dynamic from "next/dynamic";
import { ICreateTour } from "@/core/types/Tours/ITours";

const MapContainer = dynamic(
  () => import("react-leaflet").then((mod) => mod.MapContainer),
  { 
    ssr: false,
    loading: () => <div className="w-full h-full bg-gray-200 animate-pulse rounded-[20px] flex items-center justify-center">
      <span className="text-gray-500">در حال بارگذاری نقشه...</span>
    </div>
  }
);

const TileLayer = dynamic(
  () => import("react-leaflet").then((mod) => mod.TileLayer),
  { 
    ssr: false,
    loading: () => null
  }
);

const Marker = dynamic(
  () => import("react-leaflet").then((mod) => mod.Marker),
  { 
    ssr: false,
    loading: () => null
  }
);

const Popup = dynamic(
  () => import("react-leaflet").then((mod) => mod.Popup),
  { 
    ssr: false,
    loading: () => null
  }
);

const MapEventsComponent: FC<{ onMapClick: (lat: number, lng: number) => void }> = ({ onMapClick }) => {
  const { useMapEvents } = require("react-leaflet");
  useMapEvents({
    click(e: any) {
      onMapClick(e.latlng.lat, e.latlng.lng);
    },
  });
  return null;
};

const MapEvents = dynamic(
  () => Promise.resolve(MapEventsComponent),
  { ssr: false }
);

type LocationItem = {
  name: string;
  lat: string;
  lng: string;
};

interface StepThreeProps {
  formData: ICreateTour
  setFormData: React.Dispatch<React.SetStateAction<ICreateTour>>
  selectedLocation: { lat: number; lng: number } | null
  setSelectedLocation: React.Dispatch<React.SetStateAction<{ lat: number; lng: number } | null>>
}

const StepThree: React.FC<StepThreeProps> = ({ 
  formData, 
  setFormData, 
  selectedLocation, 
  setSelectedLocation 
}) => {
  const [isClient, setIsClient] = useState(false);
  const [mapLoaded, setMapLoaded] = useState(false);

  useEffect(() => {
    setIsClient(true);
    
    const timer = setTimeout(() => {
      setMapLoaded(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined" || !isClient) return;
    
    (async () => {
      try {
        const L = await import("leaflet");
        delete (L.Icon.Default.prototype as any)._getIconUrl;
        L.Icon.Default.mergeOptions({
          iconRetinaUrl: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjUiIGhlaWdodD0iMjUiIHZpZXdCb3g9IjAgMCAyNSAyNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMTIuNSIgY3k9IjEyLjUiIHI9IjEyLjUiIGZpbGw9IiMyNzUzRkYiLz4KPHBhdGggZD0iTTEyLjUgNkwxOCAxMi41SDE3VjE5SDE0VjE1SDExVjE5SDhWMTIuNUg3TDEyLjU2IDZaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4=',
          iconUrl: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjUiIGhlaWdodD0iMjUiIHZpZXdCb3g9IjAgMCAyNSAyNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMTIuNSIgY3k9IjEyLjUiIHI9IjEyLjUiIGZpbGw9IiMyNzUzRkYiLz4KPHBhdGggZD0iTTEyLjUgNkwxOCAxMi41SDE3VjE5SDE0VjE1SDExVjE5SDhWMTIuNUg3TDEyLjU2IDZaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4=',
          shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
        });
      } catch (error) {
        console.error("Error loading Leaflet:", error);
      }
    })();
  }, [isClient]);

  const handleAddress = (e: React.ChangeEvent<HTMLInputElement>) =>
    setFormData(prev => ({ ...prev, address: e.target.value }));

  const handleMapClick = (lat: number, lng: number) => {
    setSelectedLocation({ lat, lng });
    
    const newLocations: [LocationItem, LocationItem] = [
      { 
        name: "موقعیت اصلی تور",
        lat: lat.toString(), 
        lng: lng.toString() 
      },
      { 
        name: "موقعیت دوم تور",
        lat: lat.toString(), 
        lng: lng.toString() 
      }
    ];
    
    setFormData(prev => ({ ...prev, locations: newLocations }));
  };

  if (!isClient) {
    return (
      <div className="flex flex-col lg:flex-row w-full gap-4 lg:gap-6">
        <div className="flex flex-col w-full lg:max-w-[40%] gap-4">
          <div className="border border-gray-300 dark:border-[#555555] p-3 sm:p-4 rounded-xl w-full transition-all duration-200 focus-within:border-blue-500 dark:focus-within:border-blue-400">
            <label className="text-gray-600 dark:text-[#AAAAAA] text-sm sm:text-[14px] font-[500] px-2">
              آدرس تور:
            </label>
            <input
              type="text"
              name="address"
              className="w-full outline-0 bg-transparent text-gray-800 dark:text-[#DDDDDD] placeholder-gray-500 dark:placeholder-[#888888] text-sm sm:text-[14px]"
              placeholder="آدرس کامل تور را وارد کنید"
              value={formData.address}
              onChange={handleAddress}
            />
          </div>

          <div className="text-center lg:text-right">
            <h4 className="text-[#000000] dark:text-white text-base sm:text-lg lg:text-[20px] leading-relaxed">
              با انتخاب موقعیت مکانی تور خود از روی نقشه 
              <br className="hidden sm:block" />
              به راحتی <span className="text-[#8CFF45] text-base sm:text-lg lg:text-[20px]">موقعیت تور</span> را تعیین کنید.
            </h4>
          </div>
        </div>
        <div className="w-full lg:max-w-[60%]">
          <div className="w-full h-[300px] sm:h-[350px] lg:h-[400px] rounded-[20px] bg-gradient-to-br from-blue-500/10 to-purple-500/10 border-2 border-blue-200/50 shadow-2xl flex items-center justify-center">
            <p className="text-gray-600 dark:text-white font-vazir text-base sm:text-lg">در حال بارگذاری نقشه...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col lg:flex-row w-full gap-4 lg:gap-6">
      <div className="flex flex-col w-full lg:max-w-[40%] gap-4">
        <fieldset className="border border-gray-300 dark:border-[#555555] p-3 sm:p-4 rounded-xl w-full transition-all duration-200 focus-within:border-blue-500 dark:focus-within:border-blue-400">
          <legend className="text-gray-600 dark:text-[#AAAAAA] text-sm sm:text-[14px] font-[500] px-2">
            آدرس تور:
          </legend>
          <input
            type="text"
            name="address"
            className="w-full outline-0 bg-transparent text-gray-800 dark:text-[#DDDDDD] placeholder-gray-500 dark:placeholder-[#888888] text-sm sm:text-[14px]"
            placeholder="آدرس کامل تور را وارد کنید"
            value={formData.address}
            onChange={handleAddress}
          />
        </fieldset>

        <div className="text-center lg:text-right">
          <h4 className="text-[#000000] dark:text-white text-base sm:text-lg lg:text-[20px] leading-relaxed">
            با انتخاب موقعیت مکانی تور خود از روی نقشه 
            <br className="hidden sm:block" />
            به راحتی <span className="text-[#8CFF45] text-base sm:text-lg lg:text-[20px]">موقعیت تور</span> را تعیین کنید.
          </h4>
        </div>
      </div>
      
      <div className="w-full lg:max-w-[60%]">
        <div className="w-full h-[300px] sm:h-[350px] lg:h-[400px] rounded-[20px] bg-gradient-to-br from-blue-500/10 to-purple-500/10 border-2 border-blue-200/50 shadow-2xl relative">
          {mapLoaded ? (
            <MapContainer
              center={[35.6892, 51.3890]}
              zoom={12}
              style={{ height: '100%', width: '100%' }}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="&copy; OpenStreetMap contributors"
              />
              <MapEvents onMapClick={handleMapClick} />
              {selectedLocation && (
                <Marker position={[selectedLocation.lat, selectedLocation.lng]}>
                  <Popup>
                    <div className="text-right font-vazir text-sm">
                      <h3 className="font-bold text-blue-600 mb-2">موقعیت انتخاب‌شده تور</h3>
                      <p>عرض جغرافیایی: {selectedLocation.lat.toFixed(6)}</p>
                      <p>طول جغرافیایی: {selectedLocation.lng.toFixed(6)}</p>
                    </div>
                  </Popup>
                </Marker>
              )}
            </MapContainer>
          ) : (
            <div className="w-full h-full bg-gray-200 animate-pulse rounded-[20px] flex items-center justify-center">
              <span className="text-gray-500">در حال بارگذاری نقشه...</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StepThree;