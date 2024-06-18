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
    <nav className={`p-4 ${theme === 'light' ? 'bg-iridescent' : 'bg-gray-800'}`}>
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-black dark:text-white">
        <img 
        src={Logo} 
        alt="Logo" 
        className="mr-6"
        style={{ width: '115px', height: '115px' }}
         />
         </Link>
         <div className='flex gap-8 text-2xl font-bold text-black dark:text-white '>
         <Link to="/about" className="text-2xl font-bold text-black dark:text-white">Nos</Link>

         <Link to="/gallery" className="text-2xl font-bold text-black dark:text-white">Galeria</Link>

         <Link to="/donations" className="text-2xl font-bold text-black dark:text-white">Donaciones</Link>

         <Link to="/music" className="text-2xl font-bold text-black dark:text-white">Música</Link>

         <Link to="/videos" className="text-2xl font-bold text-black dark:text-white">Videos</Link>

         <Link to="/contact" className="text-2xl font-bold text-black dark:text-white">Conectar</Link>
         </div>
        
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
