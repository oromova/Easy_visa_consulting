import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import img1 from '../assets/popular1.jpg';
import img2 from '../assets/popular2.jpg';
import img3 from '../assets/popular3.jpg';
import img4 from '../assets/popular4.jpg';
import img5 from '../assets/popular5.jpg';
import img6 from '../assets/popular6.jpg';
import img7 from '../assets/popular7.jpg';

const Popular = () => {
  return (
    <section id="popular">
      <div className="container max-w-[1300px] mx-auto px-4 mb-[100px]">
        <h1 className="text-[32px] md:text-[40px] font-bold mt-[50px]">Ommabop</h1>
        <div className="w-[50px] h-[5px] bg-[#ff0000] mb-[20px]"></div>

        <Swiper
          navigation={true}
          modules={[Navigation]}
          spaceBetween={20}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
            1280: {
              slidesPerView: 4,
            },
          }}
        >
          {[img1, img2, img3, img4, img5, img6, img7].map((img, index) => {
            const titles = [
              'Sharm El-Sheyx',
              'Dubay',
              'Turkiya',
              'Tailand',
              'Malayziya',
              'Singapur',
              'Indoneziya',
            ];
            return (
              <SwiperSlide key={index}>
                <div className="flex flex-col items-center">
                  <img
                    className="w-full h-[220px] object-cover rounded-[10px] max-w-[250px] mx-auto"
                    src={img}
                    alt={titles[index]}
                  />
                  <h4 className="mt-2 font-semibold text-[18px] md:text-[20px] text-center">
                    {titles[index]}
                  </h4>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Popular;
