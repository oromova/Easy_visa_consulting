import React from 'react';
import logo from '../assets/logo.png';
import navBg from '../assets/navbar-bg.png';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const { t, i18n } = useTranslation();
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <header>
      <div className='bg-white shadow-md' >
        <nav className='relative'>
          <img className='max-w-[800px] h-full opacity-25 absolute left-1/2 top-1/2 transform translate-x-1/2 -translate-y-1/2' src={navBg} alt="navbar-bg" />
          <div className='w-[1300px] mx-auto h-[80px] px-[15px] mt-[20px] py-2 flex justify-between'>
            <a className='w-[100px] h-[60px]' href="/">
              <img src={logo} alt="logotip" />
            </a>
            <ul className='items-center flex uppercase font-bold text-[14px] gap-8 ml-auto mr-[30px]'>
              <li>
                <a className='hover:text-red-600' href="about">{t('header.about')}</a>
              </li>
              <li>
                <a className='hover:text-red-600' href="/country">{t('header.country')}</a>
              </li>
              <li>
                <a className='hover:text-red-600' href="/service">{t('header.service')}</a>
              </li>
              <li>
                <a className='hover:text-red-600' href="/work">{t('header.work')}</a>
              </li>
              <li>
                <a className='hover:text-red-600' href="/contact">{t('header.contact')}</a>
              </li>
              <select
                className='uppercase bg-black text-white p-1'
                name="lang"
                id="lang"
                onChange={(e) => changeLanguage(e?.target?.value)}
                value={i18n.language}
              >
                <option className='uppercase' value="uz">Uz</option>
                <option className='uppercase' value="ru">Ru</option>
                <option className='uppercase' value="en">En</option>
              </select>
            </ul>
          </div>


        </nav>
      </div>
    </header>
  );
};

export default Header;