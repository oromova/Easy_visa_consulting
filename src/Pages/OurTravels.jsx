import React from 'react';
import bg from '../assets/ourtravels.png';
import { useTranslation } from 'react-i18next';

const OurTravels = () => {
  const { t } = useTranslation();

  return (
    <section className='bg-center bg-cover '
      style={{ backgroundImage: `url(${bg})` }}>
      <div
        className='container max-w-[1300px] mx-auto px-4 py-[80px]'>
        <div data-aos="fade-right">
          <h1 className="text-[32px] md:text-[44px] font-bold text-white">{t('travels')}</h1>
          <div className="w-[50px] h-[5px] bg-[#ff0000] mt-2 mb-[20px]"></div>
        </div>
      </div>
    </section>
  );
};

export default OurTravels;
