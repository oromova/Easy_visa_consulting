import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import slide1 from '../assets/home1.png';
import slide2 from '../assets/home2.png';
import slide3 from '../assets/home3.webp';

const Home = () => {
  return (
    <main>
      <Swiper
        slidesPerView={1}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className="w-full h-screen relative"
      >
        <SwiperSlide>
          <div className="relative w-full h-screen">
            <img className="w-full h-full object-cover" src={slide1} alt="slide1" />
            <div className="absolute inset-0 flex items-center justify-center px-4 text-center">
              <h1 className="bg-black px-[30px] sm:px-[40px] md:px-[50px] py-[15px] sm:py-[18px] md:py-[20px] rounded-[20px] text-white text-xl sm:text-2xl md:text-3xl lg:text-[40px] xl:text-[48px] font-bold uppercase leading-snug">
                Sayohatingizdagi qulaylik - <br /> bizning mas'uliyatimizdir
              </h1>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative w-full h-screen">
            <img className="w-full h-full object-cover" src={slide2} alt="slide2" />
            <div className="absolute inset-0 flex items-center justify-center px-4 text-center">
              <h1 className="bg-black px-[30px] sm:px-[40px] md:px-[50px] py-[15px] sm:py-[18px] md:py-[20px] rounded-[20px] text-white text-xl sm:text-2xl md:text-3xl lg:text-[40px] xl:text-[48px] font-bold uppercase leading-snug">
                Barcha mamlakatlar uchun <br /> ishonchli viza tayyorlash
              </h1>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative w-full h-screen">
            <img className="w-full h-full object-cover" src={slide3} alt="slide3" />
            <div className="absolute inset-0 flex items-center justify-center px-4 text-center">
              <h1 className="bg-black px-[30px] sm:px-[40px] md:px-[50px] py-[15px] sm:py-[18px] md:py-[20px] rounded-[20px] text-white text-xl sm:text-2xl md:text-3xl lg:text-[40px] xl:text-[48px] font-bold uppercase leading-snug">
                Arzon narxlardagi eng yaxshi <br /> sayohat marshrutlari
              </h1>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </main>
  );
};

export default Home;
