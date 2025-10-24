"use client";
import { IHousesDetail } from "@/core/types/HouseReserveDetail/IHousesDetail";
import Image from "next/image";
import React, { FC, useState } from "react";

interface IProps {
  Info: IHousesDetail;
}

const DetailImage: FC<IProps> = ({ Info }) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleImageClick = (index: number) => {
    if (selectedIndex === index) {
      setSelectedIndex(0);
    } else {
      setSelectedIndex(index);
    }
  };

  const mainImage = selectedIndex !== null && Info.photos?.[selectedIndex]?.trim()
    ? Info.photos[selectedIndex].trim()
    : Info.photos?.[0]?.trim() || "https://storage.c2.liara.space/sepehr-ac/uploads/1753995432907-white-house-a-frame-section-c0a4a3b3-e722202f114e4aeea4370af6dbb4312b.jpg";

  return (
    <div className="w-full flex flex-col md:flex-row justify-between items-start gap-4 sm:gap-6 mt-4">
      <div className="w-full min-w-0 h-[250px] sm:h-[350px] md:h-[444px] overflow-hidden rounded-3xl">
        <Image
          width={1500}
          height={444}
          className="w-full h-full object-cover"
          src={mainImage}
          alt="House main image"
          priority
        />
      </div>
      {Info.photos && Info.photos.length > 0 && (
        <div className="w-full sm:w-auto md:max-w-[200px] flex flex-wrap gap-2 sm:gap-3">
          {Info.photos.slice(0, 8).map((photo, index) => (
            <div
              key={index}
              onClick={() => handleImageClick(index)}
              className={`w-20 sm:w-24 h-20 sm:h-24 rounded-xl overflow-hidden cursor-pointer transition-all ${
                selectedIndex === index || (selectedIndex === null && index === 0)
                  ? "border-2 border-white dark:border-[#8CFF45]"
                  : "border border-transparent hover:border-white dark:hover:border-[#8CFF45]"
              }`}
            >
              <Image
                width={100}
                height={100}
                className="w-full h-full object-cover"
                src={photo.trim()}
                alt={`House image ${index + 1}`}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DetailImage;