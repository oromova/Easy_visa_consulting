import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { countries } from '../mock/countries';

const Country = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section id="country">
      <div className='container mx-auto px-4 w-[1300px]  mb-[100px]'>
        <div data-aos="fade-right">
          <h1 className='text-[40px] font-bold mt-[50px]'>Mamlakatlar</h1>
          <div className='w-[50px] h-[5px] bg-[#ff0000] mb-[20px]'></div>
        </div>

        <div className='flex flex-wrap gap-[30px] justify-center xl:justify-between mt-[40px] aos-init aos-animate'
          data-aos="zoom-in">
          {
            countries.map((country, index) => (
              <div className='shadow-lg max-w-[350px] h-[282px] hover:cursor-pointer w-full rounded-t-[32px] '
                key={country.id}
                data-aos={index % 2 === 0 ? 'fade-up' : 'fade-down'}
              >
                <div className='w-full h-[200px]'>
                  <img src={country.img} alt={country.name}
                    className='w-full h-[200px] rounded-t-2xl' />
                </div>
                <div className='relative flex'>
                  <h3 className='px-[20px] text-[22px] font-bold uppercase my-[25px]'>
                    {country.name}
                  </h3>
                  <div className='absolute right-2 top-5'>
                    <img src={country.logo} alt={`${country.name} logo`} className='mx-auto w-[80px] h-[50px] rounded-2xl shadow-lg' />
                  </div>
                </div>
                <div className='w-full h-[3px] bg-[#ff0000]'></div>
              </div>

            ))
          }
        </div>
      </div>
    </section>
  );
};

export default Country;
