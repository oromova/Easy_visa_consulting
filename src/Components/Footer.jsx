import React from 'react';
import img from '../assets/contact1.webp';
import img2 from '../assets/contact2.webp';
import img3 from '../assets/contact3.svg';
import img4 from '../assets/contact4.svg';

const Footer = () => {
  return (
    <footer className='bg-black text-white' id='contact'>
      <div className='container max-w-[1300px] mx-auto px-4 pb-10 lg:pb-[100px] pt-[80px]'>
        <div className='flex flex-col lg:flex-row flex-wrap justify-between gap-10'>

          {/* 1. Contact info */}
          <div className='w-full lg:w-[25%]'>
            <div data-aos="fade-right">
              <h1 className="text-[32px] md:text-[44px] font-bold text-white text-center lg:text-left">Aloqa</h1>
              <div className="w-[50px] h-[5px] bg-[#ff0000] mt-2 mb-[20px] mx-auto lg:mx-0"></div>
            </div>

            <p className='font-bold mt-[35px] text-[18px] mb-[15px] text-center lg:text-left' data-aos="fade-right">Ulanish uchun:</p>
            <ul className='text-center lg:text-left'>
              <li className='leading-tight text-[14px]' data-aos="fade-right">
                <a className='cursor-pointer' href="tel:+998997126666">+998 99 712 66 66</a>
              </li>
              <li className='leading-tight text-[14px]' data-aos="fade-right">
                <a className='cursor-pointer' href="tel:+998974839999">+998 97 483 99 99</a>
              </li>
            </ul>

            {/* Ijtimoiy tarmoqlar */}
            <div className='text-[14px]'>
              <p className='font-bold mt-[35px] text-[18px] mb-[15px] text-center lg:text-left' data-aos="fade-right">Ijtimoiy tarmoqlar</p>

              <div className='flex flex-col gap-3 mt-[15px] items-center lg:items-start' data-aos='fade-right'>
                <a className='rounded-lg flex gap-2 items-center transition-all mb-[10px]' href="https://www.instagram.com/easy.visa.uzb/?igsh=aXI4bG9mMm5sczZ3&utm_source=qr">
                  <img className='w-[30px]' src={img} alt="instagram" />
                  <p className='hover:text-[#D5192F]'>easy.visa.uzb</p>
                </a>

                <div className='flex items-start gap-2'>
                  <img src={img2} alt="telegram user" className='w-[30px] h-[30px]' />
                  <div>
                    <a className='hover:text-[#D5192F] transition-all block' href="https://t.me/Ataev_Bakhodir90">t.me/Ataev_Bakhodir90</a>
                    <a className='hover:text-[#D5192F] transition-all block' href="https://t.me/sevaraataeva1986">t.me/sevaraataeva1986</a>
                  </div>
                </div>

                <a className='rounded-lg flex gap-2 items-center transition-all mb-[10px]' href="https://t.me/easyvizatourconsulting">
                  <img className='w-[30px]' src={img3} alt="telegram" />
                  <p className='hover:text-[#D5192F]'>Telegram</p>
                </a>

                <div className='rounded-lg flex gap-2 items-center transition-all mb-[10px]'>
                  <img className='w-[30px]' src={img4} alt="manzil" />
                  <p className='hover:text-[#D5192F]'>Toshkent, Mustaqillik ko'chasi, 59</p>
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
            <h3 className='text-[30px] md:text-[40px] text-center lg:text-left font-bold'>Ariza yuborish</h3>
            <form className='flex flex-col gap-4 mt-6'>
              <input className='py-3 bg-white pl-4 text-sm outline-none text-[#222221]' placeholder='Ism' type="text" required />
              <input className='py-3 bg-white pl-4 text-sm outline-none text-[#222221]' placeholder='Familiya' type="text" required />
              <input className='py-3 bg-white pl-4 text-sm outline-none text-[#222221]' placeholder='Telefon' type="tel" required />
              <textarea className='h-[120px] py-3 pl-4 bg-white text-sm outline-none text-[#222221]' placeholder='Izohlar'></textarea>
              <button type='submit' className='bg-[#D5192F] rounded-lg py-3 text-white font-bold transition-all hover:bg-white hover:text-[#D5192F]'>Ariza topshirish</button>
            </form>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
