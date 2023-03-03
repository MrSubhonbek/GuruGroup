"use client";
import Image from "next/image";
import { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/bundle";
import "./Images.scss";

const lenImage = [1, 2, 3, 4];

const Images: FC = () => {
  const handleShowImage = lenImage.map((id) => (
    <SwiperSlide key={id}>
      <Image
        alt=""
        src={`https://picsum.photos/id/${Math.floor(Math.random() * 1000)}/300`}
        width={300}
        height={300}
        className="rounded-t-lg"
      />
    </SwiperSlide>
  ));
  return (
    <div>
      <Swiper
        pagination={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        {handleShowImage}
      </Swiper>
    </div>
  );
};

export default Images;
