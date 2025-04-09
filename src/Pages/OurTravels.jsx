import React from 'react';
import bg from '../assets/ourtravels.png';

const OurTravels = () => {
  return (
    <section className='bg-center bg-cover '
      style={{ backgroundImage: `url(${bg})` }}>
      <div
        className='container max-w-[1300px] mx-auto px-4 py-[80px]'
        
      >
        <div data-aos="fade-right">
          <h1 className="text-[32px] md:text-[44px] font-bold text-white">Sayohatlarimiz</h1>
          <div className="w-[50px] h-[5px] bg-[#ff0000] mt-2 mb-[20px]"></div>
        </div>
      </div>
    </section>
  );
};

export default OurTravels;
