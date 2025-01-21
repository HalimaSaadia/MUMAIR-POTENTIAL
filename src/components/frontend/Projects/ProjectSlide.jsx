"use client";
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ProjectCard from "./ProjectCard";


const ProjectSlide = ({ data }) => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={0}
      pagination={{
        clickable: true,
      }}
      breakpoints={{
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
      }}
      modules={[Pagination]}
      className="mySwiper "
    >
      {data?.map((item, idx) => (
        <SwiperSlide key={idx} className="mb-12 ">
          <ProjectCard data={item} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ProjectSlide;