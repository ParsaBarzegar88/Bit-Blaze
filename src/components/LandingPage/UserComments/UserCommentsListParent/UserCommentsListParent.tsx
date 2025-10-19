/* eslint-disable */
"use client";
import React, { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination } from "swiper/modules";
import UserCommentsList from "./UserCommentsList/UserCommentsList";
import { IComments } from "@/core/types/LandingPage/IComments";

interface IProps {
  comments: IComments;
}
const users = [
  { id: 1, name: "محمد رضا ساداتی", avatar: "م" },
  { id: 2, name: "پارسا برزگر", avatar: "پ" },
  { id: 3, name: "نویدرضا عباس زاده", avatar: "ن" },
  { id: 4, name: "ابوالفضل تقوی", avatar: "ا" },
  { id: 5, name: "محمد جواد علیزاده", avatar: "م" },
  { id: 6, name: "سارا قربانی", avatar: "س" },
  { id: 7, name: "امیر عباسی", avatar: "ا" },
  { id: 8, name: "نازنین موسوی", avatar: "ن" },
  { id: 9, name: "حسین رضایی", avatar: "ح" },
  { id: 10, name: "مریم جعفری", avatar: "م" },
];
const UserCommentsListParent: FC<IProps> = ({ comments }) => {
  const getCommentWithUser = (comment: any, index: number) => {
    const userIndex = index % users.length;
    return {
      ...comment,
      user: users[userIndex],
    };
  };
  return (
    <div className="flex flex-row justify-between max-w-[98%] mx-auto h-[350px] animate-fade mb-5">
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        rewind={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 100,
          },
          1280: {
            slidesPerView: 2,
            spaceBetween: 100,
          },
        }}
        pagination={{
          clickable: true,
          renderBullet: (index, className) => {
            return `<span class="${className} custom-bullet"></span>`;
          },
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        {comments.data.map((comment, index) => {
          const commentWithUser = getCommentWithUser(comment, index);
          return (
            <SwiperSlide key={index}>
              <UserCommentsList commentData={commentWithUser} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default UserCommentsListParent;
