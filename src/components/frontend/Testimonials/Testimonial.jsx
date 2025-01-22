"use client";
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import profile1 from "../../../../public/images/testimonials/client_1.png";
import profile2 from "../../../../public/images/testimonials/client_2.png";
import TestimonialCard from "./TestimonialCard";
import "./testimonial.css"

const Testimonial = () => {
  const data = [
    {
      profile: profile1,
      name: "Nafiul Islam",
      review:
        "Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices. ",
    },
    {
      profile: profile2,
      name: "Nafiul Islam",
      review:
        "Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices.",
    },
    {
      profile: profile1,
      name: "Nafiul Islam",
      review:
        "Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices. ",
    },
    {
      profile: profile2,
      name: "Nafiul Islam",
      review:
        "Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices.",
    },
    {
      profile: profile1,
      name: "Nafiul Islam",
      review:
        "Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices. ",
    },
    {
      profile: profile2,
      name: "Nafiul Islam",
      review:
        "Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices.",
    },
  ];
  return (
   <div className="overflow-x-hidden">
     <Swiper
      slidesPerView={1.2} // Show a fractional amount of slides
      centeredSlides={true} // Center the active slide
      spaceBetween={0} // Ensure no space between slides
      pagination={{
        clickable: true,
      }}
      breakpoints={{
        1024: {
          slidesPerView: 1.8, // Adjust for larger screens
          spaceBetween: 80,
        },
       
      }}
      initialSlide={2}
      modules={[Pagination]}
      className="mySwiper testimonial-swiper "
    >
      {data?.map((item, idx) => (
        <SwiperSlide key={idx} className="mb-20 ">
          <TestimonialCard data={item} />
        </SwiperSlide>
      ))}
    </Swiper> 
   </div>
  );
};

export default Testimonial;
