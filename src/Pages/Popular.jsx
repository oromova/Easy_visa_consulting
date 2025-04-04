import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import img1 from '../assets/popular1.jpg';
import img2 from '../assets/popular2.jpg';
import img3 from '../assets/popular3.jpg';
import img4 from '../assets/popular4.jpg';
import img5 from '../assets/popular5.jpg';
import img6 from '../assets/popular6.jpg';
import img7 from '../assets/popular7.jpg';


const Popular = () => {
  return (
    <section>
      <div className='w-[1300px] mx-auto mb-[100px]'>
        <h1 className='text-[40px] font-bold mt-[50px]'>Ommabop</h1>
        <div className='w-[50px] h-[5px] bg-[#ff0000] mb-[20px]'></div>
        <div>
          <Swiper
            navigation={true}
            modules={[Navigation]}
            slidesPerView={3}
            spaceBetween={50}
          >
            <SwiperSlide>
              <img className='w-[250px] h-[220px] rounded-[10px]' src={img1} alt="Sharm El-Sheyx" />
              <h4 className='mt-2 font-semibold text-[20px]'>Sharm El-Sheyx</h4>
            </SwiperSlide>
            <SwiperSlide>
              <img className='text-center w-[250px] h-[220px] rounded-[10px]' src={img2} alt="Sharm El-Sheyx" />
              <h2 className='text-center mt-2 font-semibold text-[20px]'>Dubay</h2>
            </SwiperSlide>
            <SwiperSlide>
              <img className='w-[250px] h-[220px] rounded-[10px]' src={img3} alt="Sharm El-Sheyx" />
              <h2 className='text-center mt-2 font-semibold text-[20px]'>Turkiya</h2>
            </SwiperSlide>
            <SwiperSlide>
              <img className='w-[250px] h-[220px] rounded-[10px]' src={img4} alt="Sharm El-Sheyx" />
              <h2 className='mt-2 font-semibold text-[20px]'>Tailand</h2>
            </SwiperSlide>
            <SwiperSlide>
              <img className='w-[250px] h-[220px] rounded-[10px]' src={img5} alt="Sharm El-Sheyx" />
              <h2 className='mt-2 font-semibold text-[20px]'>Malayziya</h2>
            </SwiperSlide>
            <SwiperSlide>
              <img className='w-[250px] h-[220px] rounded-[10px]' src={img6} alt="Sharm El-Sheyx" />
              <h2 className='mt-2 font-semibold text-[20px]'>Singapur</h2>
            </SwiperSlide>
            <SwiperSlide>
              <img className='w-[250px] h-[220px] rounded-[10px]' src={img7} alt="Sharm El-Sheyx" />
              <h2 className='mt-2 font-semibold text-[20px]'>Indoneziya</h2>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Popular;