"use client";

import React, { useEffect, useState } from "react";
import { useCookies } from "next-client-cookies";
import { ICreateHouse } from "@/core/types/CreateHouse/CreateHouse";

const yard_type = ["جنگلی", "باغ", "روستایی", "بالکن"] as const;
const available_tags = ["استخر", "سالن ورزشی", "انباری", "تراس", "بالکن اختصاصی", "حیاط بزرگ", "پارکینگ سرپوشیده"] as const;

const StepThree = () => {
  const cookies = useCookies();

  const [formData, setFormData] = useState<ICreateHouse>(() => {
    const saved = cookies.get("House");
    if (saved) {
      return JSON.parse(saved);
    }
    return {
      title: "", capacity: 0, price: 0,
      categories: { name: "" }, transaction_type: "", caption: null,
      address: "", location: { lat: 0, lng: 0 },
      bathrooms: 0, yard_type: "", parking: 0, rooms: 0, rate: 0,
      tags: []
    };
  });

  const [selectedTag, setSelectedTag] = useState("");

  useEffect(() => {
    cookies.set("House", JSON.stringify(formData), {});
  }, [formData, cookies]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]:
        name === "rooms" || name === "bathrooms" || name === "parking" || name === "rate"
          ? Number(value) || 0
          : value,
    }));
  };

  const handleTagSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setSelectedTag(value);

    if (value && !formData.tags?.includes(value)) {
      setFormData(prev => ({
        ...prev,
        tags: [...(prev.tags || []), value]
      }));
    }
    setSelectedTag("");
  };

  const handleRemoveTag = (tagToRemove: string) => {
    setFormData(prev => ({
      ...prev,
      tags: prev.tags?.filter(tag => tag !== tagToRemove) || []
    }));
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
        <fieldset className="border border-gray-300 dark:border-[#555555] p-3 rounded-xl w-full focus-within:border-blue-500">
          <legend className="text-gray-600 dark:text-[#AAA] text-sm px-2">تعداد اتاق</legend>
          <input
            type="number"
            name="rooms"
            value={formData.rooms || ""}
            onChange={handleChange}
            placeholder="مثلاً ۳"
            className="w-full outline-none bg-transparent text-gray-800 dark:text-white"
          />
        </fieldset>
        <fieldset className="border border-gray-300 dark:border-[#555555] p-3 rounded-xl w-full focus-within:border-blue-500">
          <legend className="text-gray-600 dark:text-[#AAA] text-sm px-2">تعداد حمام</legend>
          <input
            type="number"
            name="bathrooms"
            value={formData.bathrooms || ""}
            onChange={handleChange}
            placeholder="مثلاً ۲"
            className="w-full outline-none bg-transparent text-gray-800 dark:text-white"
          />
        </fieldset>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
        <fieldset className="border border-gray-300 dark:border-[#555555] p-3 rounded-xl w-full focus-within:border-blue-500">
          <legend className="text-gray-600 dark:text-[#AAA] text-sm px-2">تعداد پارکینگ</legend>
          <input
            type="number"
            name="parking"
            value={formData.parking || ""}
            onChange={handleChange}
            placeholder="مثلاً ۱"
            className="w-full outline-none bg-transparent text-gray-800 dark:text-white"
          />
        </fieldset>
        <fieldset className="border border-gray-300 dark:border-[#555555] p-3 rounded-xl w-full focus-within:border-blue-500">
          <legend className="text-gray-600 dark:text-[#AAA] text-sm px-2">نوع حیاط</legend>
          <select
            name="yard_type"
            value={formData.yard_type || ""}
            onChange={handleChange}
            className="w-full outline-none bg-transparent text-gray-800 dark:text-white cursor-pointer"
          >
            <option value="">انتخاب کنید</option>
            {yard_type.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </fieldset>
      </div>

      <div className="flex flex-col gap-4">
        <fieldset className="border border-gray-300 dark:border-[#555555] p-3 rounded-xl focus-within:border-blue-500">
          <legend className="text-gray-600 dark:text-[#AAA] text-sm px-2">امکانات و ویژگی‌ها</legend>
          <select
            value={selectedTag}
            onChange={handleTagSelect}
            className="w-full outline-none bg-transparent text-gray-800 dark:text-white cursor-pointer"
          >
            <option value="">امکانات را انتخاب کنید</option>
            {available_tags
              .filter(tag => !formData.tags?.includes(tag))
              .map((tag) => (
                <option key={tag} value={tag}>
                  {tag}
                </option>
              ))
            }
          </select>

          <div className="min-h-[60px] p-3 border border-gray-200 dark:border-[#444444] rounded-lg bg-gray-50 dark:bg-[#333333] mt-3">
            <div className="flex flex-wrap gap-2">
              {formData.tags && formData.tags?.length > 0 ? (
                formData.tags?.map((tag, index) => (
                  <div
                    key={index}
                    className="flex items-center py-2 px-5 gap-1 bg-[#8CFF45] text-black dark:text-white rounded-[12px] text-sm"
                  >
                    <span>{tag}</span>
                    <button
                      type="button"
                      onClick={() => handleRemoveTag(tag)}
                      className="mr-1 text-red-500 hover:text-red-700 text-xs font-bold"
                    >
                      ×
                    </button>
                  </div>
                ))
              ) : (
                <span className="text-gray-500 dark:text-gray-400 text-sm">
                  هیچ امکاناتی انتخاب نشده است
                </span>
              )}
            </div>
          </div>
        </fieldset>
      </div>
    </div>
  );
};

export default StepThree;