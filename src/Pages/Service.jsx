import React, { useState } from 'react';
import { service } from '../mock/service';
import { useTranslation } from 'react-i18next';

const Service = () => {
  const [activeId, setActiveId] = useState(service[0]?.id);
  const { t } = useTranslation();

  const handleClick = (id) => {
    setActiveId(activeId === id ? '' : id);
  };

  return (
    <section id='service' className='md:mt-[200px] lg:pt-[50px]'>
      <div className="container max-w-[1300px] mx-auto px-4">
        <div data-aos="fade-right">
          <h1 className="text-[32px] md:text-[44px] font-bold">{t('service.title')}</h1>
          <div className="w-[50px] h-[5px] bg-[#ff0000] mb-[20px]"></div>
        </div>

        <div className="w-full flex flex-wrap gap-2 mt-[15px]">
          {service.map((item) => (
            <div key={item.id} className="w-[200px]">
              <button
                onClick={() => handleClick(item.id)}
                className={`leading-none text-[15px] px-4 py-3 border-none rounded-md cursor-pointer transition-colors duration-300 ease-in-out aos-init aos-animate w-full text-left
                  ${activeId === item.id ? 'bg-[#f00] text-white' : 'bg-[#292D32] text-white hover:bg-gray-400'}
                `}
                data-aos="zoom-in"
              >
                {t(item.title)}
              </button>
            </div>
          ))}
        </div>

        <div className="w-full mt-6">
          {service.map((item) => (
            activeId === item.id && (
              <article key={item.id} className="pl-[10px] pr-[10px] md:pl-[50px] w-full">
                <div className='text-block'>
                  <div className='flex items-center gap-4 my-2'>
                    <div className='bg-[#f00] w-[5px] h-[50px]'></div>
                    <h3 className='font-bold text-[18px]' data-aos="fade-right">{t(item.title)}</h3>
                  </div>
                  <p className='text-[18px] mb-[25px]'>{t(item.description)}</p>
                </div>
              </article>
            )
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
