"use client";
import { GetAllCategory } from "@/core/api/CategoryList/Category";
import { ICategoryItem } from "@/core/types/Category/Category";
import { ICreateHouse } from "@/core/types/CreateHouse/CreateHouse";
import { useCookies } from "next-client-cookies";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
const transactionType = [
  { value: "rental", label: "اجاره ای" },
  { value: "mortgage", label: "رهن" },
  { value: "reservation", label: "رزرو" },
  { value: "direct purchase", label: "نقدی مستقیم" },
];

const StepOne = () => {
  const [formData, setFormData] = useState<ICreateHouse>({
    title: "",
    capacity: 0,
    price: 0,
    categories: { name: "" },
    transaction_type: "",
    caption: null,
  });
  const [category, setCategory] = useState<ICategoryItem[]>([]);
  const [descriptionAi, setDescriptionAi] = useState<string | null>(null);
  const CookieStore = useCookies()
  const AllCategory = async () => {
    const getCategory = await GetAllCategory();
    setCategory(getCategory?.data || []);
  };
  useEffect(() => {
    AllCategory();
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      let updatedFormData: ICreateHouse;
      if (name === "categories") {
        updatedFormData = { ...prev, categories: { name: value } };
      } else if (name === "capacity" || name === "price") {
        updatedFormData = { ...prev, [name]: Number(value) };
      } else {
        updatedFormData = { ...prev, [name]: value };
      }
      CookieStore.set("House", JSON.stringify(updatedFormData), {});
      return updatedFormData;
    });
  };

  const SendToAi = async () => {
    if (!formData?.title ||
      !formData?.capacity ||
      !formData?.categories ||
      !formData?.transaction_type ||
      !formData?.price) {
      toast.error("لطفا اول مقادیر مورد نیاز را وارد کنید", {
        position: "top-center",
        autoClose: 2400,
        hideProgressBar: false,
        pauseOnHover: true,
        draggable: true,
        style: { fontFamily: "IRANSansXFaNum", direction: "rtl" },
      })
      return;
    }

    const prompt = `
تو یک متخصص املاک بسیار دقیق هستی و فقط باید یک توضیح برای خانه انتخاب کنی.

داده‌های کاربر:
- اسم خانه: ${formData?.title ?? "بدون اسم"}
- نوع خانه: ${formData?.categories ?? "بدون دسته بندی"}
- ظرفیت خانه: ${formData?.capacity ?? "بدون ظرفیت"}
- قیمت خانه: ${formData?.price ?? "بدون قیمت"}
- معامله خانه: ${formData?.transaction_type ?? "بدون معامله"}

قوانین سخت‌گیرانه:
1. خروجی فقط یک JSON کامل و معتبر باشد (بدون هیچ متن اضافه).
2. اگر هیچ توضیح مناسب نبود، دقیقاً این را برگردون:
   {"message": "متاسفانه توضیح مطابق با درخواست شما پیدا نشد."}

فرمت خروجی دقیق:
{
  "caption": string,
}

حالا بهترین خانه را انتخاب کن و فقط JSON را برگردون:
        `.trim();
    try {
      const response = await fetch('/api/ai/description', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ message: prompt }),
      })
      if (!response.ok) {
        toast.error("خطای سرور", {
          position: "top-center",
          autoClose: 2400,
          hideProgressBar: false,
          pauseOnHover: true,
          draggable: true,
          style: { fontFamily: "IRANSansXFaNum", direction: "rtl" },
        });
        return;
      }
      const data = await response.json();
      if (JSON.parse(data).message === "متاسفانه توضیح مطابق با درخواست شما پیدا نشد.") {
        toast.error("متاسفانه توضیح مطابق با درخواست شما پیدا نشد.", {
          position: "top-center",
          autoClose: 2400,
          hideProgressBar: false,
          pauseOnHover: true,
          draggable: true,
          style: { fontFamily: "IRANSansXFaNum", direction: "rtl" },
        });
        setDescriptionAi(null);
      } else {
        setDescriptionAi(JSON.parse(data).caption);
      }
    } catch {
      return;
    }
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center">
        <fieldset className="border border-gray-300 dark:border-[#555555] p-2 sm:p-3 rounded-xl min-w-[150px] sm:min-w-[200px] w-full transition-all duration-200 focus-within:border-blue-500 dark:focus-within:border-blue-400">
          <legend className="text-gray-600 dark:text-[#AAAAAA] text-[14px] font-[500] px-2">
            نام ملک :
          </legend>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            className="w-full outline-0 bg-transparent text-gray-800 dark:text-[#DDDDDD] placeholder-gray-500 dark:placeholder-[#888888] text-[14px]"
            placeholder="آپارتمان لوتوس 102 در ساری"
          />
        </fieldset>
        <fieldset className="border border-gray-300 dark:border-[#555555] p-2 sm:p-3 rounded-xl min-w-[150px] sm:min-w-[200px] w-full transition-all duration-200 focus-within:border-blue-500 dark:focus-within:border-blue-400">
          <legend className="text-gray-600 dark:text-[#AAAAAA] text-[14px] font-[500] px-2">
            ظرفیت (نفر):
          </legend>
          <input
            type="number"
            name="capacity"
            value={formData.capacity}
            onChange={handleInputChange}
            className="w-full outline-0 bg-transparent text-gray-800 dark:text-[#DDDDDD] placeholder-gray-500 dark:placeholder-[#888888] text-[14px]"
            placeholder="مثال: 4"
          />
        </fieldset>
      </div>
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center">
        <fieldset className="border border-gray-300 dark:border-[#555555] p-2 sm:p-3 rounded-xl min-w-[150px] sm:min-w-[200px] w-full transition-all duration-200 focus-within:border-blue-500 dark:focus-within:border-blue-400">
          <legend className="text-gray-600 dark:text-[#AAAAAA] text-[14px] font-[500] px-2">
            نوع معامله :
          </legend>
          <select
            name="transaction_type"
            value={formData.transaction_type}
            onChange={handleInputChange}
            className="w-full outline-0 bg-transparent text-gray-800 dark:text-[#DDDDDD] text-[14px] cursor-pointer"
          >
            <option value="" className="text-gray-500">
              انتخاب کنید
            </option>
            {transactionType?.map((option) => (
              <option
                key={option.value}
                value={option.value}
                className="text-gray-800 dark:text-white bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                {option.label}
              </option>
            ))}
          </select>
        </fieldset>
        <fieldset className="border border-gray-300 dark:border-[#555555] p-2 sm:p-3 rounded-xl min-w-[150px] sm:min-w-[200px] w-full transition-all duration-200 focus-within:border-blue-500 dark:focus-within:border-blue-400">
          <legend className="text-gray-600 dark:text-[#AAAAAA] text-[14px] font-[500] px-2">
            قیمت (تومان) :
          </legend>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleInputChange}
            className="w-full outline-0 bg-transparent text-gray-800 dark:text-[#DDDDDD] placeholder-gray-500 dark:placeholder-[#888888] text-[14px]"
            placeholder="مثال: 1000000"
          />
        </fieldset>
      </div>
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center">
        <fieldset className="border border-gray-300 dark:border-[#555555] p-2 sm:p-3 rounded-xl min-w-[150px] sm:min-w-[200px] w-full transition-all duration-200 focus-within:border-blue-500 dark:focus-within:border-blue-400">
          <legend className="text-gray-600 dark:text-[#AAAAAA] text-[14px] font-[500] px-2">
            نوع ملک :
          </legend>
          <select
            name="categories"
            value={formData?.categories?.name}
            onChange={handleInputChange}
            className="w-full outline-0 bg-transparent text-gray-800 dark:text-[#DDDDDD] text-[14px] cursor-pointer"
          >
            <option value="" className="text-gray-500">
              انتخاب کنید
            </option>
            {category?.map((option) => (
              <option
                key={option.id}
                value={option.name}
                className="text-gray-800 dark:text-white bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                {option.name}
              </option>
            ))}
          </select>
        </fieldset>
        <div className="min-w-[150px] sm:min-w-[200px] w-full"></div>
      </div>
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center">
        <fieldset className="border border-gray-300 dark:border-[#555555] p-2 sm:p-3 rounded-xl w-full transition-all duration-200 focus-within:border-blue-500 dark:focus-within:border-blue-400">
          <legend className="text-gray-600 dark:text-[#AAAAAA] text-[14px] font-[500] px-2">
            توضیحات ملک:
          </legend>
          <div className="">
            <textarea
              name="caption"
              rows={3}
              value={formData.caption ? formData?.caption : descriptionAi ? descriptionAi : ""}
              onChange={handleInputChange}
              className="w-full outline-0 bg-transparent text-gray-800 dark:text-[#DDDDDD] placeholder-gray-500 dark:placeholder-[#888888] text-[14px] resize-none"
              placeholder="توضیحات کامل درباره ملک..."
            ></textarea>
          </div>
        </fieldset>
      </div>
      {formData.title && formData.capacity && formData.categories && formData.price && formData.transaction_type && (
        <button onClick={SendToAi} className="rounded-2xl py-2 px-4 bg-red-400 text-white text-[12px] hover:bg-red-500 transition-colors w-fit">
          توضیح هوش مصنوعی
        </button>
      )}
    </div>
  );
};

export default StepOne;