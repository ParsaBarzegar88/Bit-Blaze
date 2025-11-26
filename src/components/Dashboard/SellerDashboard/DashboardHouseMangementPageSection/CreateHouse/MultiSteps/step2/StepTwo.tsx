/* eslint-disable */
"use client";
import React, { FC, useEffect, useState } from "react";
import { useCookies } from "next-client-cookies";
import "leaflet/dist/leaflet.css";
import dynamic from "next/dynamic";
import { LatLngExpression } from "leaflet";
import { ICreateHouse } from "@/core/types/CreateHouse/CreateHouse";
import { useMapEvents } from "react-leaflet";

const MapContainer = dynamic(
  () => import("react-leaflet").then((mod) => mod.MapContainer),
  { ssr: false }
);
const TileLayer = dynamic(
  () => import("react-leaflet").then((mod) => mod.TileLayer),
  { ssr: false }
);
const Marker = dynamic(
  () => import("react-leaflet").then((mod) => mod.Marker),
  { ssr: false }
);
const Popup = dynamic(
  () => import("react-leaflet").then((mod) => mod.Popup),
  { ssr: false }
);

const MapEvents: FC<{ onMapClick: (lat: number, lng: number) => void }> = ({ onMapClick }) => {
  useMapEvents({
    click(e) {
      onMapClick(e.latlng.lat, e.latlng.lng);
    },
  });
  return null;
};

const StepTwo: FC = () => {
  const cookies = useCookies();
  const [isClient, setIsClient] = useState(false);
  const [formData, setFormData] = useState<ICreateHouse>({
    title: "", capacity: 0, price: 0,
    categories: { name: "" }, transaction_type: "", caption: null,
    address: "", location: { lat: 0, lng: 0 }
  });

  useEffect(() => {
    const saved = cookies.get("House");
    if (saved) {
      try { setFormData(JSON.parse(saved)) }

      catch { console.error("کوکی خراب بود"); }
    }
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isClient) cookies.set("House", JSON.stringify(formData), {});
  }, [formData, isClient]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    (async () => {
      const L = await import("leaflet");
      delete (L.Icon.Default.prototype as any)._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjUiIGhlaWdodD0iMjUiIHZpZXdCb3g9IjAgMCAyNSAyNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMTIuNSIgY3k9IjEyLjUiIHI9IjEyLjUiIGZpbGw9IiMyNzUzRkYiLz4KPHBhdGggZD0iTTEyLjUgNkwxOCAxMi41SDE3VjE5SDE0VjE1SDExVjE5SDhWMTIuNUg3TDEyLjU2IDZaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4=',
        iconUrl: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjUiIGhlaWdodD0iMjUiIHZpZXdCb3g9IjAgMCAyNSAyNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMTIuNSIgY3k9IjEyLjUiIHI9IjEyLjUiIGZpbGw9IiMyNzUzRkYiLz4KPHBhdGggZD0iTTEyLjUgNkwxOCAxMi41SDE3VjE5SDE0VjE1SDExVjE5SDhWMTIuNUg3TDEyLjU2IDZaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4=',
        shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
      });
    })();
  }, []);

  const handleAddress = (e: React.ChangeEvent<HTMLInputElement>) =>
    setFormData(prev => ({ ...prev, address: e.target.value }));

  const handleMapClick = (lat: number, lng: number) =>
    setFormData(prev => ({ ...prev, location: { lat, lng } }));

 if (!isClient) {
  return (
    <div className="flex flex-col lg:flex-row w-full gap-4 lg:gap-6">
      <div className="flex flex-col w-full lg:max-w-[40%] gap-4">
        <fieldset className="border border-gray-300 dark:border-[#555555] p-3 sm:p-4 rounded-xl w-full transition-all duration-200 focus-within:border-blue-500 dark:focus-within:border-blue-400">
          <legend className="text-gray-600 dark:text-[#AAAAAA] text-sm sm:text-[14px] font-[500] px-2">
            نشانی ملک:
          </legend>
          <input
            type="text"
            name="address"
            className="w-full outline-0 bg-transparent text-gray-800 dark:text-[#DDDDDD] placeholder-gray-500 dark:placeholder-[#888888] text-sm sm:text-[14px]"
            placeholder="ساری-دنیای آرزو- پژوهشگاه سپهرگان"
            value={formData.address}
            onChange={handleAddress}
          />
        </fieldset>
        <div className="text-center lg:text-right">
          <h4 className="text-[#000000] dark:text-white text-base sm:text-lg lg:text-[20px] leading-relaxed">
            با انتخاب موقعیت مکانی ملک خود از روی نقشه 
            <br className="hidden sm:block" />
            به راحتی <span className="text-[#8CFF45] text-base sm:text-lg lg:text-[20px]">موقعیت ملک</span> را تعیین کنید.
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
          نشانی ملک:
        </legend>
        <input
          type="text"
          name="address"
          className="w-full outline-0 bg-transparent text-gray-800 dark:text-[#DDDDDD] placeholder-gray-500 dark:placeholder-[#888888] text-sm sm:text-[14px]"
          placeholder="ساری-دنیای آرزو- پژوهشگاه سپهرگان"
          value={formData.address}
          onChange={handleAddress}
        />
      </fieldset>
      <div className="text-center lg:text-right">
        <h4 className="text-[#000000] dark:text-white text-base sm:text-lg lg:text-[20px] leading-relaxed">
          با انتخاب موقعیت مکانی ملک خود از روی نقشه 
          <br className="hidden sm:block" />
          به راحتی <span className="text-[#8CFF45] text-base sm:text-lg lg:text-[20px]">موقعیت ملک</span> را تعیین کنید.
        </h4>
      </div>
    </div>
    <div className="w-full lg:max-w-[60%]">
      <div className="w-full h-[300px] sm:h-[350px] lg:h-[400px] rounded-[20px] bg-gradient-to-br from-blue-500/10 to-purple-500/10 border-2 border-blue-200/50 shadow-2xl relative">
        <MapContainer
          center={[35.6892, 51.3890]}
          zoom={12}
          className="w-full h-full rounded-[20px]"
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; OpenStreetMap contributors"
          />
          <MapEvents onMapClick={handleMapClick} />
          {formData.location && formData.location.lat !== 0 && formData.location.lng !== 0 && (
            <Marker position={[formData.location.lat, formData.location.lng] as LatLngExpression}>
              <Popup>
                <div className="text-right font-vazir text-sm">
                  <h3 className="font-bold text-blue-600 mb-2">موقعیت انتخاب‌شده</h3>
                </div>
              </Popup>
            </Marker>
          )}
        </MapContainer>
      </div>
    </div>
  </div>
);
};

export default StepTwo;