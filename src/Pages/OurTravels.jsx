import React, { useState } from 'react';
import bg from '../assets/ourtravels.png';
import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import img1 from "../assets/carousel1.jpg";
import img2 from "../assets/carousel2.jpg";
import img3 from "../assets/carousel3.jpg";
import img4 from "../assets/carousel4.jpg";
import img5 from "../assets/carousel5.jpg";
import img6 from "../assets/carousel6.jpg";
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

const OurTravels = () => {
  const { t } = useTranslation();
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <section className='bg-center bg-cover '
      style={{ backgroundImage: `url(${bg})` }}>
      <div className='container max-w-[1300px] mx-auto px-4 py-[80px]'>
        <div data-aos="fade-right">
          <h1 className="text-[32px] md:text-[44px] font-bold text-white">{t('travels')}</h1>
          <div className="w-[50px] h-[5px] bg-[#ff0000] mt-2 mb-[20px]"></div>
          {/* Carousel */}
          <Swiper
            style={{
              '--swiper-navigation-color': '#fff',
              '--swiper-pagination-color': '#fff',
            }}
            spaceBetween={10}
            navigation={true}
            thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
            modules={[FreeMode, Navigation, Thumbs]}
          >
            {[img1, img2, img3, img4, img5, img6].map((img, index) => (
              <SwiperSlide key={index}>
                <img src={img} alt={`Travel Image ${index + 1}`} className='w-full h-[700px] object-cover' loading="lazy" />
              </SwiperSlide>
            ))}
          </Swiper>

          <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={10}
            slidesPerView={4}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
          >
            {[img1, img2, img3, img4, img5, img6].map((img, index) => (
              <SwiperSlide key={index}>
                <img src={img} alt={`Thumbnail ${index + 1}`} className='thumbnail w-[300px] h-[250px]' loading="lazy" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default OurTravels;
