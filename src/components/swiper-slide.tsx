import { Swiper, SwiperSlide } from 'swiper/react';
import { useEffect } from "react";
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import AOS from "aos";
import "aos/dist/aos.css";  
import images from "@/assets/images";  // Assuming you have an 'images' object with image imports.

export default function SwiperSlider() {
    useEffect(() => {
        AOS.init({ duration: 1000 });
      }, []);

  return (
    <Swiper
      effect="coverflow"
      grabCursor={true}
      centeredSlides={true}
      slidesPerView="2"
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      pagination={{ clickable: true }}
      modules={[EffectCoverflow, Pagination]}
      className="h-[40vh] w-full mt-20"
    >
      {/* Manually adding the images */}
      <SwiperSlide>
        <img src={images.image1} alt="Slide 1" className="h-full w-full" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={images.image2} alt="Slide 2" className="h-full w-full" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={images.image3} alt="Slide 3" className="h-full w-full" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={images.image4} alt="Slide 4" className="h-full w-full" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={images.image5} alt="Slide 5" className="h-full w-full" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={images.image6} alt="Slide 6" className="h-full w-full" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={images.image7} alt="Slide 7" className="h-full w-full" />
      </SwiperSlide>
    </Swiper>
  );
}
