// src/components/Navbar.jsx

import React from 'react';
import { useTheme } from '../context/themeContext';
import Logo from '../assets/logo/logo-no-background.svg';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <nav className="p-4 bg-gray-300 dark:bg-gray-800">
      <div className="container mx-auto flex justify-between items-center">
        <img 
        src={Logo} 
        alt="Logo" 
        className="mr-6"
        style={{ width: '96px', height: '96px' }}
         />
         <Link to="/about" className="text-2xl font-bold text-black dark:text-white">Home</Link>
        <h1 className="text-2xl font-bold text-black dark:text-white">TeleRaiders</h1>
        <button
          onClick={toggleTheme}
          className="p-2 bg-pink-500 dark:bg-purple-600 rounded-full text-black dark:text-white"
        >
          {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
