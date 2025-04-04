import React from 'react';
import logo from '../assets/logo.png';
import img from '../assets/about.jpg';

const About = () => {
  return (
    <section id='about'>
      <div className='mt-[50px] w-[1300px] mx-auto mb-[50px]'>
        <div className=''>
          <span className='block w-[30%] h-[2px] bg-[#f00]'></span>
          <div className='flex justify-between gap-[10px]'>
            <div className='max-w-[570px]'>
              <h2 className='text-[40px] font-bold mt-[50px]'>Biz haqimizda</h2>
              <div className='w-[50px] h-[5px] bg-[#ff0000] mt-[10px]'></div>
              <p className='mt-[30px] mb-[50px] text-[18px] font-medium '>
                EASY VISA CONSULTING – sayohatchilar uchun visa ko‘mak berishga ixtisoslashgan tez o‘sayotgan kompaniya. Biz sizning sayohatlaringizni qulay va bezovta qilmaydigan qilishga e'tibor qaratamiz.
                <br /> <br />
                EASY VISA CONSULTING ta'til va biznes safarlari uchun Shengen, Kanada, AQSH, Buyuk Britaniya, Yaponiya va Koreyaga visa rasmiylashtirish xizmatlarini taqdim etadi. Tajribali mutaxassislardan iborat jamoamiz yuqori xizmat darajasini ta'minlaydi, shunda siz sayohat rejalaringizga e'tibor qaratishingiz mumkin.
                <br /> <br />
                Biz O‘zbekistonlik mijozlar uchun visa olish jarayonini oddiy va tushunarli qilishga qaratilganmiz, shunda ularga dunyoning eng yaxshi sayohat manzillariga oson va tez kirish imkonini beramiz.
              </p>

            </div>

            <div className='relative'>
              <img className='absolute -bottom-[25px] w-[250px]' src={logo} alt="logo" />
              <img className='rounded-3xl w-full' src={img} alt="about img" />
            </div>
          </div>
          <span className='block w-[30%] h-[2px] bg-[#f00]'></span>
        </div>
      </div>
    </section>
  );
};

export default About;