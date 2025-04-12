import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import CountUp from 'react-countup';
import turizm from '../assets/turizm2.svg';
import logo1 from '../assets/turizm1.webp';
import logo3 from '../assets/turizm3.svg';
import logo4 from '../assets/turizm4.svg';
import img from '../assets/numbers-bg.png';
import { useTranslation } from 'react-i18next';
import { numbers } from '../mock/numbers';

const Turizm = () => {
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section
      className="mt-[70px] bg-cover bg-center mb-[100px]"
      style={{ backgroundImage: "url('https://www.easyvisatour.uz/_nuxt/prioritet-bg.4VHDpVMf.png')" }}
    >
      <div className="container max-w-[1300px] mx-auto px-4 pt-[80px] pb-[50px] h-[800px]">
        <div className="text-center" data-aos="fade-down">
          <h3 className="text-[32px] md:text-[40px] lg:text-[50px] font-bold text-white">
            {t('excursion.title')}
          </h3>
          <span className="bg-[#ff0000] w-[50px] h-[5px] block mx-auto my-[5px]"></span>
        </div>
        <p
          className="text-center text-white font-bold mt-4 text-[15px] md:text-[17px] leading-snug md:leading-tight px-2 md:px-20"
          data-aos="fade-up"
        >
          {t('excursion.subtitle')}
        </p>
        <div className="flex lg:flex-wrap flex-col-1 justify-center md:justify-between mt-[60px] gap-2 lg:gap-10">
          <div className="text-center w-[135px]" data-aos="zoom-in">
            <img className="md:max-w-[135px] md:max-h-[135px] max-w-[55px] max-h-[55px] mx-auto" src={logo1} alt="Vaqtingizni Tejash" />
            <h3 className="text-white text-[14px] md:text-[15px] font-bold mt-[20px] leading-tight">{t('excursion.data1')}</h3>
          </div>

          <div className="text-center w-[135px]" data-aos="zoom-in" data-aos-delay="100">
            <img className="md:max-w-[135px] md:max-h-[135px] max-w-[55px] max-h-[55px] mx-auto"
              src={turizm} alt="Ishinchlilik" />
            <h3 className="text-white text-[14px] md:text-[15px] font-bold mt-[20px] leading-tight">{t('excursion.data2')}</h3>
          </div>

          <div className="text-center w-[135px]" data-aos="zoom-in" data-aos-delay="200">
            <img className="md:max-w-[135px] md:max-h-[135px] max-w-[55px] max-h-[55px] mx-auto" src={logo3} alt="Qo'llab-quvvatlash" />
            <h3 className="text-white text-[14px] md:text-[15px] font-bold mt-[20px] leading-tight">{t('excursion.data3')}</h3>
          </div>

          <div className="text-center w-[135px]" data-aos="zoom-in" data-aos-delay="300">
            <img className="md:max-w-[135px] md:max-h-[135px] max-w-[55px] max-h-[55px] mx-auto" src={logo4} alt="Qulaylik" />
            <h3 className="text-white text-[14px] md:text-[15px] font-bold mt-[20px] leading-tight">{t('excursion.data4')}</h3>
          </div>
        </div>

        <div className='md:mt-[100px] mt-[20px] mx-[50px] py-[5px] max-w-[1000px] mx-auto h-fit rounded-[25px] bg-cover bg-center'
          style={{ backgroundImage: `url(${img})` }}>
          <div className='mt-[15px] aos-init aos-animate'
            data-aos="fade-up">
            <h3 className='text-[30px] md:text-[50px] text-center font-bold md:mt-[50px] text-white'>
              {t('excursion.numbers')}
            </h3>
            <span className='block w-[50px] h-[5px] bg-white mx-auto mt-[10px]'></span>
          </div>
          <div className='w-full flex justify-center  md:justify-evenly gap-[20px] mt-[10px] px-[20px]'>
            {
              numbers.map((number, index) => (
                <div key={index} className='flex flex-col items-center aos-init aos-animate'
                  data-aos="zoom-in">
                  <h4 className='xl:text-[100px] md:[80px] lg:text-[60px] text-[40px] text-white font-bold'>
                    <CountUp
                      start={1000}
                      end={number.number}
                      duration={3}
                      enableScrollSpy
                    >
                      {({ countUpRef }) => (
                        <span ref={countUpRef} className='w-full flex-wrap justify-center'></span>
                      )}
                    </CountUp>
                  </h4>
                  <p className='md:text-[16px] text-[12px] text-white text-center font-bold uppercase my-[20px]'>
                    {t(number.subtitleKey)}
                  </p>
                </div>
              ))
            }
          </div>
        </div>

        <span className='max-w-[1000px] h-[3px] mx-auto bg-[#f00] block mt-[50px]'></span>
      </div>
    </section>
  );
};

export default Turizm;
