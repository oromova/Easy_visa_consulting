import React from 'react';
import logo from '../assets/logo.png';
import img from '../assets/about.jpg';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();
  return (
    <section id="about" className="py-10">
      <div className="container max-w-[1300px] mx-auto px-4 mb-12">
        {/* Top line */}
        <span className="block w-[30%] h-[2px] bg-[#f00] mx-auto sm:mx-0"></span>

        {/* Main content */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 mt-10">
          {/* Left: Text */}
          <div className="max-w-xl">
            <h2 className="text-3xl sm:text-4xl font-bold">{t('about.title')}</h2>
            <div className="w-[50px] h-[5px] bg-[#ff0000] mt-2 mb-6"></div>
            <p className="text-base sm:text-[18px] font-medium text-justify leading-relaxed">
              {t('about.subtitle')}
              <br /><br />
              {t('about.subtitle2')}
              <br /><br />
              {t('about.subtitle3')}
            </p>
          </div>

          {/* Right: Image */}
          <div className="relative w-full max-w-xl">
            <img
              className="rounded-3xl w-full object-cover"
              src={img}
              alt="about"
            />
            <img
              className="absolute -bottom-6 left-[140px] -translate-x-1/2 max-w-[200px]  md:max-w-[300px]"
              src={logo}
              alt="logo"
            />
          </div>
        </div>

        {/* Bottom line */}
        <span className="block w-[30%] h-[2px] bg-[#f00] mt-10 mx-auto sm:mx-0"></span>
      </div>
    </section>
  );
};

export default About;
