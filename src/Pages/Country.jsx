import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { countries } from '../mock/countries';
import { useTranslation } from 'react-i18next';

const Country = () => {
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section id="country" className="pt-10">
      <div className="container max-w-[1300px] px-4 mx-auto mb-16">
        <div data-aos="fade-right">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mt-8 text-center sm:text-left">
          {t('city.title')}
          </h1>
          <div className="w-[40px] sm:w-[50px] h-[4px] bg-[#ff0000] mb-6 mt-2 mx-auto sm:mx-0"></div>
        </div>

        <div
          className="flex flex-wrap gap-6 sm:gap-8 justify-center lg:justify-between mt-10"
          data-aos="zoom-in"
        >
          {countries.map((country, index) => (
            <div
              key={country.id || index}
              className="w-full max-w-[350px] rounded-t-3xl shadow-lg hover:cursor-pointer transition-transform hover:scale-105"
              data-aos={index % 2 === 0 ? 'fade-up' : 'fade-down'}
            >
              <div className="w-full h-[200px]">
                <img
                  src={country.img}
                  alt={country.name}
                  className="w-full h-full object-cover rounded-t-3xl"
                />
              </div>
              <div className="relative flex items-center justify-between px-4 py-3">
                <h3 className="text-[20px] font-bold uppercase">{t(country.name)}</h3>
                <img
                  src={country.logo}
                  alt={`${country.name} logo`}
                  className="w-[60px] h-[40px] rounded-xl shadow-md object-contain"
                />
              </div>
              <div className="w-full h-[3px] bg-[#ff0000]"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Country;
