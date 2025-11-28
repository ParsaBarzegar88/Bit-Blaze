import { IBookingData } from "@/core/types/bookingHouse/IBookingHouse";
import { useCookies } from "next-client-cookies";
import { useEffect, useState } from "react";
import { FiUsers } from "react-icons/fi";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { toast, ToastContainer } from "react-toastify";

const SendTicket = () => {
  const cookie = useCookies();
  const [shareMobile, setShareMobile] = useState("");
  const [shareEmail, setShareEmail] = useState("");
  useEffect(() => {
    const bookCookie = cookie.get("book");
    if (bookCookie) {
      try {
        const parsedCookie = JSON.parse(bookCookie);
        setShareMobile(parsedCookie.shareMobile || "");
        setShareEmail(parsedCookie.shareEmail || "");
      } catch (error) {
        console.error("Error parsing book cookie:", error);
      }
    }
  }, [cookie]);

  
  useEffect(() => {
    const bookCookie = cookie.get("book");
    const bookData: IBookingData = bookCookie ? JSON.parse(bookCookie) : {};

    const updatedBookData = {
      ...bookData,
      shareMobile: shareMobile || bookData.shareMobile || null,
      shareEmail: shareEmail || bookData.shareEmail || null,
    };
    cookie.set("book", JSON.stringify(updatedBookData));
  }, [shareMobile, shareEmail, cookie]);

  const handleSubmit = () => {
    if (shareMobile && shareEmail) {
      toast.success("اطلاعات با موفقیت ثبت شد!", {
        position: "top-right",
        autoClose: 3000,
        theme: "colored",
        style: {
          fontFamily: "IRANSansXFaNum",
          textAlign: "right",
        },
      });
    } else {
      toast.error("لطفاً شماره تلفن و ایمیل را وارد کنید!", {
        position: "top-right",
        autoClose: 3000,
        theme: "colored",
        style: {
          fontFamily: "IRANSansXFaNum",
          textAlign: "right",
        },
      });
    }
  };

  return (
    <>
    <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={true}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
        <div
        className="p-4 sm:p-6 dark:shadow-none shadow-lg border dark:border-[#333] border-gray-200 bg-white dark:bg-[#393939] w-full rounded-[24px] text-black dark:text-white font-sans"
        dir="rtl"
        >
        <div className="w-full flex flex-col sm:flex-row justify-between items-center mb-4 p-2 rounded-xl dark:shadow-none shadow-md border dark:border-0 dark:border-[#333] border-gray-200 dark:bg-[#4D4D4D] bg-gray-100">
            <div className="flex flex-row gap-2 items-center text-lg dark:text-white text-gray-800 mb-2 sm:mb-0">
            <FiUsers size={20} className="text-[#4f9623] dark:text-[#8CFF45]" />
            <span className="flex flex-row items-center gap-1">
                ارسال بلیط به دیگری
                <div className="text-[#4f9623] dark:text-[#8CFF45] text-[13px]">
                (ارسال بلیط به ایمیل و شماره همراه دیگر)
                </div>
            </span>
            </div>
        </div>
        <div className="flex flex-col md:flex-row items-end justify-between w-full gap-4">
            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto flex-wrap">
            <fieldset className="border w-full sm:w-[250px] h-fit rounded-2xl border-gray-300 dark:border-[#AAAAAA] focus-within:border-[#8CFF45] dark:focus-within:border-[#8CFF45] bg-white dark:bg-[#393939] text-black dark:text-gray-200 outline-none transition-all duration-200">
                <legend className="mr-4 text-sm">شماره تلفن :</legend>
                <input
                type="text"
                value={shareMobile}
                onChange={(e) => setShareMobile(e.target.value)}
                className="w-full h-full mb-2 text-black dark:text-gray-200 mr-2 bg-transparent outline-none transition-all duration-200 placeholder-gray-400 dark:placeholder-gray-500"
                placeholder="شماره تلفن را وارد کنید"
                />
            </fieldset>
            <fieldset className="border w-full sm:w-[250px] h-fit rounded-2xl border-gray-300 dark:border-[#AAAAAA] focus-within:border-[#8CFF45] dark:focus-within:border-[#8CFF45] bg-white dark:bg-[#393939] text-black dark:text-gray-200 outline-none transition-all duration-200">
                <legend className="mr-4 text-sm">ایمیل :</legend>
                <input
                type="text"
                value={shareEmail}
                onChange={(e) => setShareEmail(e.target.value)}
                className="w-full h-full mb-2 text-black dark:text-gray-200 mr-2 bg-transparent outline-none transition-all duration-200 placeholder-gray-400 dark:placeholder-gray-500"
                placeholder="ایمیل را وارد کنید"
                />
            </fieldset>
            </div>
            <button
            onClick={handleSubmit}
            className="flex w-full md:w-auto justify-center items-center h-fit gap-2 px-4 py-2 text-sm font-medium rounded-xl border-[#4f9623] text-[#4f9623] dark:text-[#8CFF45] border dark:border-[#8CFF45] hover:bg-[#8CFF45]/10 transition-colors"
            >
            <IoCheckmarkCircleOutline size={20} />
            <span>ثبت اطلاعات</span>
            </button>
        </div>
        </div>
    </>
  );
};

export default SendTicket;