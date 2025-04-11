import React from 'react';
import img from '../assets/contact1.webp';
import img2 from '../assets/contact2.webp';
import img3 from '../assets/contact3.svg';
import img4 from '../assets/contact4.svg';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className='bg-black text-white' id='contact'>
      <div className='max-w-[1300px] mx-auto px-4 '>
        <div className='flex flex-col lg:flex-row flex-wrap justify-between gap-8 pt-[80px] pb-10 lg:pb-[100px]'>

          {/* 1. Contact info */}
          <div className='w-full lg:w-[25%]'>
            <div data-aos="fade-right">
              <h1 className="text-[32px] md:text-[44px] font-bold text-white text-center lg:text-left">{t('contact.title')}</h1>
              <div className="w-[50px] h-[5px] bg-[#ff0000] mt-2 mb-[20px] mx-auto lg:mx-0"></div>
            </div>

            <p className='font-bold mt-[35px] text-[18px] mb-[15px] text-center lg:text-left' data-aos="fade-right">{t('contact.subtitle')}</p>
            <ul className='text-center lg:text-left'>
              <li className='leading-tight text-[16px]' data-aos="fade-right">
                <a className='cursor-pointer' href="tel:+998997126666">+998 99 712 66 66</a>
              </li>
              <li className='leading-tight text-[16px]' data-aos="fade-right">
                <a className='cursor-pointer' href="tel:+998974839999">+998 97 483 99 99</a>
              </li>
            </ul>

            {/* Ijtimoiy tarmoqlar */}
            <div className='text-[14px]'>
              <p className='font-bold mt-[35px] text-[18px] mb-[15px] text-center lg:text-left' data-aos="fade-right">{t('contact.subtitle2')}</p>

              <div className='flex flex-col gap-3 mt-[15px] items-center lg:items-start' data-aos='fade-right'>
                <a className='rounded-lg flex gap-2 items-center transition-all mb-[10px]' href="https://www.instagram.com/easy.visa.uzb/?igsh=aXI4bG9mMm5sczZ3&utm_source=qr">
                  <img className='w-[30px]' src={img} alt="instagram" />
                  <p className='text-[16px] hover:text-[#D5192F]'>easy.visa.uzb</p>
                </a>

                <div className='flex items-center gap-2'>
                  <img src={img2} alt="telegram user" className='w-[30px] h-[30px]' />
                  <div>
                    <a className='hover:text-[#D5192F] text-[16px] transition-all block' href="https://t.me/Ataev_Bakhodir90">t.me/Ataev_Bakhodir90</a>
                    <a className='hover:text-[#D5192F] transition-all block text-[16px]' href="https://t.me/sevaraataeva1986">t.me/sevaraataeva1986</a>
                  </div>
                </div>

                <a className='rounded-lg flex gap-2 items-center transition-all mb-[10px]' href="https://t.me/easyvizatourconsulting">
                  <img className='w-[30px]' src={img3} alt="telegram belgisi" />
                  <p className='hover:text-[#D5192F] text-[16px]'>{t('contact.telegram')}</p>
                </a>

                <div className='rounded-lg flex gap-2 items-center transition-all mb-[10px]'>
                  <img className='w-[30px]' src={img4} alt="manzil belgisi" />
                  <p className='hover:text-[#D5192F] text-[16px]'>{t('contact.location')}</p>
                </div>
              </div>
            </div>
          </div>

          {/* 2. Location */}
          <div className="w-full lg:w-[33%] rounded-xl lg:h-[500px]" data-aos="fade-up">
            <iframe
              className="rounded-xl w-full h-[300px] lg:h-full"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3004.225091037873!2d69.66975517674737!3d41.15143947133076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38afb2d4577a4a75%3A0x79d9d2c0e3535831!2z0YPQuy4g0JzRg9GB0YLQsNC60LjQu9C70LjQuiA1OSwgMTEwMjI2LCDQmtGA0LDRgdC90L7Qs9C-0YDRgdC6LCDQotCw0YjQutC10L3RgtGB0LrQsNGPINC-0LHQu9Cw0YHRgtGMLCDQo9C30LHQtdC60LjRgdGC0LDQvQ!5e0!3m2!1sru!2s!4v1727896297927!5m2!1sru!2s"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              style={{ border: 0 }}
            ></iframe>
          </div>

          {/* 3. Form */}
          <div className='w-full lg:w-[30%]' data-aos="fade-left">
            <h3 className='text-[30px] md:text-[40px] text-center lg:text-left font-bold'>{t('submit.title')}</h3>
            <form className='flex flex-col gap-4 mt-6'>
              <input className='py-3 bg-white pl-4 text-sm outline-none text-[#222221]' placeholder={t("submit.name")} type="text" required data-aos='fade-left' />
              <input className='py-3 bg-white pl-4 text-sm outline-none text-[#222221]' placeholder={t("submit.surname")} type="text" required data-aos='fade-left' />
              <input className='py-3 bg-white pl-4 text-sm outline-none text-[#222221]' placeholder={t("submit.phone")} type="tel" required data-aos='fade-left' />
              <textarea className='h-[120px] py-3 pl-4 bg-white text-sm outline-none text-[#222221]' placeholder={t("submit.comment")} data-aos='fade-left'></textarea>
              <button type='submit' className='bg-[#D5192F] rounded-lg py-3 text-white font-bold transition-all hover:bg-white hover:text-[#D5192F]'>{t("submit.submit")}</button>
            </form>
          </div>

        </div>
      </div>
      {/* end Footer */}
      <div className='py-[20px] px-[10px] bg-[#111216]'>
        <div className='max-w-[1300px] mx-auto'>
          <div className='container'>
            <ul className='flex flex-col md:flex-row gap-2 md:gap-4 justify-between items-center text-center text-white'>
              <li className='font-bold uppercase text-sm md:text-base text-center'>
                {t('footer.title')}
              </li>
              <li className='font-thin text-sm md:text-base'>
                <a href="https://www.limsa.uz/">{t("footer.subtitle")}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
