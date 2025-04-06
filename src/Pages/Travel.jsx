import React from 'react';
import { travels } from '../mock/sayohat';

const Travel = () => {
  return (
    <section id="travel">
      <div className="container max-w-[1300px] mx-auto px-4 ">
        <div data-aos="fade-right">
          <h1 className="text-[32px] md:text-[44px] font-bold">Sayohat</h1>
          <div className="w-[50px] h-[5px] bg-[#ff0000] mb-[20px]"></div>
        </div>
        <div className="p-4 grid grid-cols-1 md:grid-cols-3 w-full ">
          {
            travels.map((travel, index) => {
              return (
                <div className="max-w-[300px] p-1 bg-white shadow-lg rounded-2xl mx-auto relative" 
                    key={index}>
                  <div>
                    <video className="rounded-2xl" controls src={travel.src} ></video>
                    <img className='absolute top-[-20px] left-[-25px] w-[100px] h-[60px]' 
                        src={travel.logo} alt="logo" />
                  </div>
                </div>
              );
            })
          }
        </div>
      </div>
    </section>
  );
};

export default Travel;
