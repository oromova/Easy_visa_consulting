import logo from '../assets/logo.png';
import navBg from '../assets/navbar-bg.png';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const { t, i18n } = useTranslation();
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div className='bg-white shadow-md' >
        <nav className='relative bg-cover bg-center'>
          <img
            src={navBg}
            alt="navbar-bg"
            className='w-[800px] absolute right-50 top-0 h-full opacity-25 z-0'
          />
          <div className='w-[1300px] mx-auto h-[80px] px-[15px] py-2 flex justify-between relative z-10'>
            <a className='w-[100px] h-[60px]' href="/">
              <img src={logo} alt="logotip" />
            </a>
            <ul className='items-center flex uppercase font-bold text-[14px] gap-8 ml-auto mr-[30px]'>
              <li><a className='hover:text-red-600' href="#about">{t('header.about')}</a></li>
              <li><a className='hover:text-red-600' href="#country">{t('header.country')}</a></li>
              <li><a className='hover:text-red-600' href="#service">{t('header.service')}</a></li>
              {/* <li><a className='hover:text-red-600' href="#work">{t('header.work')}</a></li> */}
              <li><a className='hover:text-red-600' href="#contact">{t('header.contact')}</a></li>
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