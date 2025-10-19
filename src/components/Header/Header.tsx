"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import ResponsiveHeader from "./ResponsiveHeader/ResponsiveHeader";

const Header = () => {
  const pathName = usePathname();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className="relative mx-auto max-w-[97%] w-full flex flex-row justify-between z-50">
      <div className="flex flex-row justify-between w-full bg-[#363636] mt-5 h-[56px] rounded-2xl mx-auto shadow-[inset_0_4px_8px_rgba(255,255,255,0.12),0_4px_12px_rgba(0,0,0,0.12)]">
        <div className="flex flex-row items-center">
          <div className="hidden lg:flex flex-row gap-3 items-center px-4">
            <Link href="/">
              <Image
                src="/assets/LandingPage/DeltaIcon.png"
                className="bg-[#FFFFFF] rounded-full"
                alt="DeltaIcon"
                width={50}
                height={30}
              />
            </Link>
            <div className="w-1 h-5 bg-[#4A4A4A] rounded-xl hidden lg:block"></div>
          </div>
          <nav className="hidden lg:flex flex-row gap-10 text-[#AAAAAA] items-center h-full">
            <div className="relative h-full group">
              <Link
                href="/house-reserve"
                className={`font-[500] group-hover:text-[#8CFF45] text-[16px] h-full flex flex-row items-center gap-2 transition-colors ${pathName === "/house-reserve" ? "text-[#8CFF45]" : ""
                  }`}
              >
                رزرو سریع
                <svg
                className={`${pathName === "/house-reserve" ? "stroke-[#8CFF45] duration-300" : "group-hover:stroke-[#8CFF45] duration-300 stroke-[#AAAAAA]"}`}
                  width="10"
                  height="7"
                  viewBox="0 0 10 7"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 1L5 5L9 1"
                    strokeWidth="2"
                  />
                </svg>
              </Link>
              {pathName === "/house-reserve" && (
                <span className="absolute w-full m-0 bottom-0 rounded-t-[12px] h-1 bg-[#8CFF45]"></span>
              )}
            </div>
            <div className="relative h-full group">
              <Link
                href="/mortgage-rent"
                className={`font-[500] text-[16px] group-hover:text-[#8CFF45] duration-300 h-full flex flex-row items-center gap-2 transition-colors ${pathName === "/mortgage-rent" ? "text-[#8CFF45]" : ""
                  }`}
              >
                رهن و اجاره
                <svg
                className={`${pathName === "/mortgage-rent" ? "stroke-[#8CFF45] duration-300" : "group-hover:stroke-[#8CFF45] duration-300 stroke-[#AAAAAA]"}`}
                  width="10"
                  height="7"
                  viewBox="0 0 10 7"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 1L5 5L9 1"
                    strokeWidth="2"
                  />
                </svg>
              </Link>
              {pathName === "/mortgage-rent" && (
                <span className="absolute w-full m-0 bottom-0 rounded-t-[12px] h-1 bg-[#8CFF45]"></span>
              )}
            </div>
            <div className="relative h-full group">
              <Link
                href="/about"
                className={`font-[500] text-[16px] group-hover:text-[#8CFF45] duration-300 h-full flex flex-row items-center gap-2 transition-colors ${pathName === "/about" ? "text-[#8CFF45]" : ""
                  }`}
              >
                درباره دلتا
              </Link>
              {pathName === "/about" && (
                <span className="absolute w-full m-0 bottom-0 rounded-t-[12px] h-1 bg-[#8CFF45]"></span>
              )}
            </div>
            <div className="relative h-full group">
              <Link
                href="/blogs"
                className={`font-[500] text-[16px] group-hover:text-[#8CFF45] duration-300 h-full flex flex-row items-center gap-2 transition-colors ${pathName === "/blogs" ? "text-[#8CFF45]" : ""
                  }`}
              >
                مقالات ما
              </Link>
              {pathName === "/blogs" && (
                <span className="absolute w-full m-0 bottom-0 rounded-t-[12px] h-1 bg-[#8CFF45]"></span>
              )}
            </div>
            <div className="relative h-full group">
              <Link
                href="/contact-us"
                className={`font-[500] group-hover:text-[#8CFF45] duration-300 text-[16px] h-full flex flex-row items-center gap-2 transition-colors ${pathName === "/contact-us" ? "text-[#8CFF45]" : ""
                  }`}
              >
                تماس با ما
              </Link>
              {pathName === "/contact-us" && (
                <span className="absolute w-full m-0 bottom-0 rounded-t-[12px] h-1 bg-[#8CFF45]"></span>
              )}
            </div>
            <div className="bg-[#7569FF] text-[#ffffff] flex flex-row items-center text-[16px] font-[500] gap-2.5 rounded-[12px] p-2 px-5">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.3333 0C11.1565 0 10.987 0.0702379 10.8619 0.195262C10.7369 0.320286 10.6667 0.489856 10.6667 0.666667C10.6667 2.63267 8.94467 3.33333 7.33333 3.33333H2.66667C1.95942 3.33333 1.28115 3.61428 0.781049 4.11438C0.280952 4.61448 0 5.29276 0 6L0 7.33333C0.00145611 7.73249 0.0929745 8.12618 0.267735 8.48505C0.442496 8.84392 0.695992 9.15872 1.00933 9.406L3.39067 14.7207C3.56003 15.1014 3.83612 15.4249 4.18551 15.6519C4.53491 15.879 4.94264 15.9999 5.35933 16C5.69087 15.9998 6.0171 15.9167 6.30831 15.7582C6.59952 15.5997 6.84648 15.3709 7.0267 15.0926C7.20692 14.8144 7.31468 14.4954 7.34017 14.1649C7.36567 13.8343 7.30809 13.5026 7.17267 13.2L5.706 10H7.33333C8.94467 10 10.6667 10.7007 10.6667 12.6667C10.6667 12.8435 10.7369 13.013 10.8619 13.1381C10.987 13.2631 11.1565 13.3333 11.3333 13.3333C11.5101 13.3333 11.6797 13.2631 11.8047 13.1381C11.9298 13.013 12 12.8435 12 12.6667V0.666667C12 0.489856 11.9298 0.320286 11.8047 0.195262C11.6797 0.0702379 11.5101 0 11.3333 0ZM5.958 13.746C6.00216 13.8457 6.02073 13.9549 6.01203 14.0636C6.00333 14.1723 5.96764 14.2771 5.90818 14.3686C5.84873 14.46 5.76739 14.5352 5.67155 14.5872C5.57571 14.6393 5.4684 14.6666 5.35933 14.6667C5.20026 14.6666 5.04465 14.6203 4.91139 14.5334C4.77813 14.4465 4.67297 14.3228 4.60867 14.1773L2.73667 10H4.23933L5.958 13.746ZM10.6667 9.73333C9.7142 8.99946 8.53491 8.62209 7.33333 8.66667H2.66667C2.31305 8.66667 1.97391 8.52619 1.72386 8.27614C1.47381 8.02609 1.33333 7.68696 1.33333 7.33333V6C1.33333 5.64638 1.47381 5.30724 1.72386 5.05719C1.97391 4.80714 2.31305 4.66667 2.66667 4.66667H7.33333C8.5345 4.7122 9.71375 4.33602 10.6667 3.60333V9.73333ZM15.9333 10.3013C15.8942 10.3797 15.8401 10.4496 15.7739 10.5071C15.7078 10.5645 15.631 10.6083 15.5479 10.6361C15.4648 10.6638 15.3771 10.6749 15.2897 10.6687C15.2023 10.6625 15.117 10.6392 15.0387 10.6L13.7053 9.93333C13.5471 9.8543 13.4267 9.71564 13.3707 9.54786C13.3147 9.38007 13.3276 9.19691 13.4067 9.03867C13.4857 8.88042 13.6244 8.76005 13.7921 8.70404C13.9599 8.64803 14.1431 8.66097 14.3013 8.74L15.6347 9.40667C15.7921 9.48565 15.9119 9.62373 15.9678 9.79073C16.0238 9.95774 16.0114 10.1401 15.9333 10.298V10.3013ZM13.4067 4.30133C13.3675 4.22299 13.3441 4.13769 13.338 4.05031C13.3318 3.96293 13.3429 3.8752 13.3706 3.79211C13.3983 3.70902 13.4422 3.63221 13.4996 3.56608C13.557 3.49994 13.627 3.44577 13.7053 3.40667L15.0387 2.74C15.1969 2.66097 15.3801 2.64803 15.5479 2.70404C15.7156 2.76005 15.8543 2.88042 15.9333 3.03867C16.0124 3.19691 16.0253 3.38007 15.9693 3.54786C15.9133 3.71564 15.7929 3.8543 15.6347 3.93333L14.3013 4.6C14.223 4.63917 14.1377 4.66252 14.0503 4.66871C13.9629 4.6749 13.8752 4.6638 13.7921 4.63607C13.709 4.60833 13.6322 4.56449 13.5661 4.50706C13.4999 4.44962 13.4458 4.37971 13.4067 4.30133ZM13.3333 6.66667C13.3333 6.48986 13.4036 6.32029 13.5286 6.19526C13.6536 6.07024 13.8232 6 14 6H15.3333C15.5101 6 15.6797 6.07024 15.8047 6.19526C15.9298 6.32029 16 6.48986 16 6.66667C16 6.84348 15.9298 7.01305 15.8047 7.13807C15.6797 7.2631 15.5101 7.33333 15.3333 7.33333H14C13.8232 7.33333 13.6536 7.2631 13.5286 7.13807C13.4036 7.01305 13.3333 6.84348 13.3333 6.66667Z"
                  fill="white"
                />
              </svg>
              فروشنده شو !
            </div>
          </nav>
          <button
            className="lg:hidden flex w-8 mr-3 h-full items-center justify-center text-[#AAAAAA] cursor-pointer"
            onClick={handleMenu}
            aria-label={isOpen ? "بستن منو" : "باز کردن منو"}
          >
            <IoMenu className="w-full h-full" />
          </button>
        </div>
        <Link
          href="/login"
          className="flex flex-row gap-2.5 items-center text-[#ffffff] ml-6 font-[500] text-[16px]"
        >
          <svg
            width="12"
            height="16"
            viewBox="0 0 12 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 8C6.79113 8 7.56448 7.76541 8.22228 7.32588C8.88008 6.88635 9.39277 6.26164 9.69552 5.53074C9.99827 4.79983 10.0775 3.99556 9.92314 3.21964C9.7688 2.44372 9.38784 1.73098 8.82843 1.17157C8.26902 0.612165 7.55629 0.231202 6.78036 0.0768607C6.00444 -0.0774802 5.20017 0.00173314 4.46927 0.304484C3.73836 0.607234 3.11365 1.11992 2.67412 1.77772C2.2346 2.43552 2 3.20888 2 4C2.00106 5.06054 2.42283 6.07734 3.17274 6.82726C3.92266 7.57718 4.93946 7.99894 6 8ZM6 1.33334C6.52742 1.33334 7.04299 1.48973 7.48152 1.78275C7.92005 2.07577 8.26185 2.49224 8.46368 2.97951C8.66551 3.46678 8.71832 4.00296 8.61543 4.52024C8.51253 5.03753 8.25856 5.51268 7.88562 5.88562C7.51268 6.25856 7.03752 6.51254 6.52024 6.61543C6.00296 6.71832 5.46678 6.66551 4.97951 6.46368C4.49224 6.26185 4.07577 5.92005 3.78275 5.48152C3.48973 5.04299 3.33333 4.52742 3.33333 4C3.33333 3.29276 3.61428 2.61448 4.11438 2.11438C4.61448 1.61429 5.29276 1.33334 6 1.33334Z"
              fill="white"
            />
            <path
              d="M6 9.33398C4.40924 9.33575 2.88414 9.96846 1.75931 11.0933C0.634472 12.2181 0.00176457 13.7432 0 15.334C0 15.5108 0.0702379 15.6804 0.195262 15.8054C0.320286 15.9304 0.489856 16.0007 0.666667 16.0007C0.843478 16.0007 1.01305 15.9304 1.13807 15.8054C1.2631 15.6804 1.33333 15.5108 1.33333 15.334C1.33333 14.0963 1.825 12.9093 2.70017 12.0342C3.57534 11.159 4.76232 10.6673 6 10.6673C7.23768 10.6673 8.42466 11.159 9.29983 12.0342C10.175 12.9093 10.6667 14.0963 10.6667 15.334C10.6667 15.5108 10.7369 15.6804 10.8619 15.8054C10.987 15.9304 11.1565 16.0007 11.3333 16.0007C11.5101 16.0007 11.6797 15.9304 11.8047 15.8054C11.9298 15.6804 12 15.5108 12 15.334C11.9982 13.7432 11.3655 12.2181 10.2407 11.0933C9.11586 9.96846 7.59076 9.33575 6 9.33398Z"
              fill="white"
            />
          </svg>
          ورود / ثبت نام
        </Link>
      </div>
      <ResponsiveHeader open={isOpen} setOpen={setIsOpen} />
    </header>
  );
};

export default Header;