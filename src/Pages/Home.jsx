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
      <div>
        <Swiper
          slidesPerView={1}
          pagination={{ clickable: true }}
          modules={[Pagination]}
          className='w-full h-screen'>
          <SwiperSlide >
            <div>
              <img className='w-full h-full' src={slide1} alt="slide1" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h1 className="bg-black px-[50px] py-[20px] rounded-[20px] text-white text-2xl font-bold uppercase text-[48px]">
                  Sayohatingizdagi qulaylik -  <br /> bizning mas'uliyatimizdir
                </h1>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img className='w-full h-full' src={slide2} alt="slide2" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h1 className="bg-black px-[50px] py-[20px] rounded-[20px] text-white text-2xl font-bold uppercase text-[48px]">
                  Barcha mamlakatlar uchun <br /> ishonchli viza tayyorlash
                </h1>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img className='w-full h-full' src={slide3} alt="slide3" />
              <div className="absolute inset-0 flex items-center justify-center ">
                <h1 className="bg-black px-[50px] py-[20px] rounded-[20px] text-white text-2xl font-bold uppercase text-[48px] opacity-100">
                  Arzon narxlardagi eng yaxshi <br /> sayohat marshrutlari
                </h1>
              </div>
            </div>
          </SwiperSlide>

        </Swiper>
      </div>
    </main>
  );
};

export default Home;