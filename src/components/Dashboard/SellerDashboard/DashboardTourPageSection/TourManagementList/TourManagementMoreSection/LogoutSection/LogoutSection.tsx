// LogoutSection.tsx
import { DeleteHouseBySeller } from "@/core/api/SellerDashboard/MyHouse";
import { DeleteTourById } from "@/core/api/Tours/Tours";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { Dispatch, FC, SetStateAction } from "react";
import { toast } from "react-toastify";

interface IProps {
  onClose: Dispatch<SetStateAction<boolean>>;
  Id: string;
}

const LogoutSection: FC<IProps> = ({ onClose, Id }) => {
  const router = useRouter();

  const handleDelete = async () => {
    const res = await DeleteTourById(Id);
    if (res.ok) {
      toast.success("تور با موفقیت حذف شد", {
        position: "top-center",
        autoClose: 2400,
        hideProgressBar: false,
        pauseOnHover: true,
        draggable: true,
        style: { fontFamily: "IRANSansXFaNum", direction: "rtl" },
      });
      router.refresh();
      onClose(false);
    } else {
      toast.error("مشکلی در حذف کردن تور به وجود آمده است", {
        position: "top-center",
        autoClose: 2400,
        hideProgressBar: false,
        pauseOnHover: true,
        draggable: true,
        style: { fontFamily: "IRANSansXFaNum", direction: "rtl" },
      });
      onClose(false);
      router.refresh();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
      <div
        className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl dark:bg-[#363636] 
                   flex flex-col items-center gap-6 animate-in fade-in zoom-in-95 duration-200"
      >
        <Image
          src="/assets/Dashboard/WarningIcon.png"
          alt="Warning"
          width={90}
          height={100}
        />
        <h2 className="text-2xl font-black text-center dark:text-white">
          آیا از حذف تور مطمئن هستید؟
        </h2>

        <div className="flex gap-4">
          <button
            onClick={() => onClose(false)}
            className="px-5 py-2 text-gray-700 dark:text-gray-300"
          >
            انصراف
          </button>
          <button
            onClick={handleDelete}
            className="px-5 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
          >
            حذف
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogoutSection;
