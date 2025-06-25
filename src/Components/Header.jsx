import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useTranslation } from 'react-i18next';
import logo from "../assets/logo.png";

const Header = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  const navItems = [
    { name: t('header.about'), href: '#about' },
    { name: t('header.country'), href: '#country' },
    { name: t('header.service'), href: '#service' },
    { name: t('header.contact'), href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-[1300px] mx-auto flex justify-between items-center px-4 h-[80px]">
        {/* Logo */}
        <a href="/" className="w-[100px]">
          <img src={logo} alt="logo" />
        </a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8 uppercase font-bold text-[14px]">
          {navItems.map((item, i) => (
            <li key={i}>
              <a className="hover:text-red-600" href={item.href}>{item.name}</a>
            </li>
          ))}
          <select
            className="bg-black text-white text-sm px-2 py-1 uppercase"
            value={i18n.language}
            onChange={(e) => changeLanguage(e.target.value)}
          >
            <option value="uz">Uz</option>
            <option value="ru">Ru</option>
            <option value="en">En</option>
          </select>
        </ul>

        {/* Burger Icon */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white px-4 py-6 space-y-4 animate-slide-down absolute top-[80px] left-0 w-full shadow-md z-40">
          {navItems.map((item, i) => (
            <a
              key={i}
              href={item.href}
              onClick={() => setTimeout(() => setIsOpen(false), 100)} // menyuni yopish + scroll ishlashi uchun
              className="block font-semibold uppercase text-[16px] hover:text-red-600"
            >
              {item.name}
            </a>
          ))}
          <select
            className="bg-black text-white text-sm px-2 py-1 uppercase"
            value={i18n.language}
            onChange={(e) => changeLanguage(e.target.value)}
          >
            <option value="uz">Uz</option>
            <option value="ru">Ru</option>
            <option value="en">En</option>
          </select>
        </div>
      )}
    </header>
  );
};

export default Header;
