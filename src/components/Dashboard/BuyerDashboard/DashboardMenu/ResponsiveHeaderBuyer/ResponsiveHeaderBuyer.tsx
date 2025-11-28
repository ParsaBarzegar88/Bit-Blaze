"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Dispatch, SetStateAction, FC } from "react";
import { IoClose } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";
import { BsChatDots } from "react-icons/bs";
import { TbCash } from "react-icons/tb";
import { MdFavoriteBorder } from "react-icons/md";
import { RiPushpinLine } from "react-icons/ri";
import { IoMdAddCircleOutline } from "react-icons/io";
import { FiHome, FiUser } from "react-icons/fi";

interface IProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const ResponsiveHeaderBuyer: FC<IProps> = ({ open, setOpen }) => {
  const pathName = usePathname();
  const handleClose = () => {
    setOpen(false)
  }
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="lg:hidden fixed top-0 right-0 w-72 h-screen bg-[#FFFFFF] dark:bg-[#363636] z-40"
          initial={{ x: "100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1, transition: { duration: 0.3, ease: "easeInOut" } }}
          exit={{ x: "100%", opacity: 0, transition: { duration: 0.3, ease: "easeInOut" } }}
        >
          <div className="flex justify-between p-4">
            <Link href={'/'} className={`font-[900] dark:text-white text-black text-[32px] ${open === true ? '' : 'hidden'}`}>
              دلتا
            </Link>
            <button
              className="dark:text-[#AAAAAA] text-[#565656]  text-2xl cursor-pointer"
              onClick={() => setOpen(false)}
              aria-label="بستن منو"
            >
              <IoClose className="dark:hover:text-[#8CFF45] hover:text-[#6fc539]" />
            </button>
          </div>
          <div className='flex flex-col h-full justify-between max-w-[90%] w-full mx-auto'>
            <div className='flex flex-col gap-10 w-full'>
              <div className='flex flex-col gap-2'>
                <Link onClick={handleClose} href={'/dashboard'} className={`flex items-center ${pathName === '/dashboard' ? 'bg-[#E0E0E0] dark:bg-[#a08cff]' : ""} ${open === true ? 'w-full ' : "w-fit pl-2"} pr-2 px-3 py-2 flex-row gap-1.5 dark:text-white  text-black transition-colors hover:bg-[#E0E0E0] dark:hover:bg-[#a08cff] rounded-[8px] cursor-pointer`}>
                  <FiHome size={24} className='w-5 h-5' />
                  <span className={`text-black mt-0.5 font-[400] dark:text-white ${open === true ? "" : 'hidden'}`}>داشبورد</span>
                </Link>
                <Link onClick={handleClose} href={'/dashboard-profile'} className={`flex items-center ${pathName === '/dashboard-profile' ? 'bg-[#E0E0E0] dark:bg-[#a08cff]' : ""} ${open === true ? 'w-full ' : "w-fit pl-2"} pr-2 px-3 py-2 flex-row gap-1.5 dark:text-white  text-black transition-colors hover:bg-[#E0E0E0] dark:hover:bg-[#a08cff] rounded-[8px] cursor-pointer`}>
                  <FiUser size={24} className='w-5 h-5' />
                  <span className={`text-black mt-0.5 font-[400] dark:text-white ${open === true ? "" : 'hidden'}`}>اطلاعات کاربری</span>
                </Link>
                <Link onClick={handleClose} href={'/dashboard-reserves'} className={`flex items-center ${pathName === '/dashboard-reserves' ? 'bg-[#E0E0E0] dark:bg-[#a08cff]' : ""} ${open === true ? 'w-full ' : "w-fit pl-2"} pr-2 px-3 py-2 flex-row gap-1.5 dark:text-white  text-black transition-colors hover:bg-[#E0E0E0] dark:hover:bg-[#a08cff] rounded-[8px] cursor-pointer`}>
                  <IoMdAddCircleOutline size={24} className='w-5 h-5' />
                  <span className={`text-black mt-0.5 font-[400] dark:text-white ${open === true ? "" : 'hidden'}`}>مدیریت رزروها</span>
                </Link>
                <Link onClick={handleClose} href={'/dashboard-wishlist'} className={`flex items-center ${pathName === '/dashboard-wishlist' ? 'bg-[#E0E0E0] dark:bg-[#a08cff]' : ""} ${open === true ? 'w-full ' : "w-fit pl-2"} pr-2 px-3 py-2 flex-row gap-1.5 dark:text-white  text-black transition-colors hover:bg-[#E0E0E0] dark:hover:bg-[#a08cff] rounded-[8px] cursor-pointer`}>
                  <RiPushpinLine size={24} className='w-5 h-5' />
                  <span className={`text-black mt-0.5 font-[400] dark:text-white ${open === true ? "" : 'hidden'}`}>لیست سنجاق ها</span>
                </Link>
                <Link onClick={handleClose} href={'/dashboard-favorites'} className={`flex items-center ${pathName === '/dashboard-favorites' ? 'bg-[#E0E0E0] dark:bg-[#a08cff]' : ""} ${open === true ? 'w-full ' : "w-fit pl-2"} pr-2 px-3 py-2 flex-row gap-1.5 dark:text-white  text-black transition-colors hover:bg-[#E0E0E0] dark:hover:bg-[#a08cff] rounded-[8px] cursor-pointer`}>
                  <MdFavoriteBorder size={24} className='w-5 h-5' />
                  <span className={`text-black mt-0.5 font-[400] dark:text-white ${open === true ? "" : 'hidden'}`}>علاقه‌مندی‌ها</span>
                </Link>
                <Link onClick={handleClose} href={'/dashboard-payments'} className={`flex items-center ${pathName === '/dashboard-payments' ? 'bg-[#E0E0E0] dark:bg-[#a08cff]' : ""} ${open === true ? 'w-full ' : "w-fit pl-2"} pr-2 px-3 py-2 flex-row gap-1.5 dark:text-white  text-black transition-colors hover:bg-[#E0E0E0] dark:hover:bg-[#a08cff] rounded-[8px] cursor-pointer`}>
                  <TbCash size={24} className='w-5 h-5' />
                  <span className={`text-black mt-0.5 font-[400] dark:text-white ${open === true ? "" : 'hidden'}`}>پرداخت‌ها</span>
                </Link>
                <Link onClick={handleClose} href={'/dashboard-announcements'} className={`flex items-center ${pathName === '/dashboard-announcements' ? 'bg-[#E0E0E0] dark:bg-[#a08cff]' : ""} ${open === true ? 'w-full ' : "w-fit pl-2"} pr-2 px-3 py-2 flex-row gap-1.5 dark:text-white  text-black transition-colors hover:bg-[#E0E0E0] dark:hover:bg-[#a08cff] rounded-[8px] cursor-pointer`}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-bell-dot min-w-5 min-h-5 h-5 w-5" aria-hidden="true">
                    <path d="M10.268 21a2 2 0 0 0 3.464 0"></path>
                    <path d="M13.916 2.314A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.74 7.327A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673 9 9 0 0 1-.585-.665"></path>
                    <circle cx="18" cy="8" r="3"></circle>
                  </svg>
                  <span className={`text-black mt-0.5 font-[400] dark:text-white ${open === true ? "" : 'hidden'}`}>اعلان‌ها</span>
                </Link>
                <Link onClick={handleClose} href={'/dashboard-chats'} className={`flex items-center ${pathName === '/dashboard-chats' ? 'bg-[#E0E0E0] dark:bg-[#a08cff]' : ""} ${open === true ? 'w-full ' : "w-fit pl-2"} pr-2 px-3 py-2 flex-row gap-1.5 dark:text-white  text-black transition-colors hover:bg-[#E0E0E0] dark:hover:bg-[#a08cff] rounded-[8px] cursor-pointer`}>
                  <BsChatDots size={24} className='w-5 h-5' />
                  <span className={`text-black mt-0.5 font-[400] dark:text-white ${open === true ? "" : 'hidden'}`}>گفتگو ها</span>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ResponsiveHeaderBuyer;
