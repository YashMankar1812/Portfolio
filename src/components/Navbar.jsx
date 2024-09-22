
import React, { useState, useEffect } from 'react';

const Navbar = () => {
  // Theme state: 'dark' or 'light'
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  // Update the theme in localStorage and the document root
  useEffect(() => {
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Toggle between light and dark mode
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const [isOpen, setIsOpen] = useState(false); // For mobile menu toggle bg-gradient-to-r from-pink-400 to to-blue-500

  return (
    <nav className='bg-gray-900 text-white dark:bg-white dark:bg-gradient-to-r from-pink-500 to to-purple-500 px-8 md:px-16 lg:px-24'>
      <div className='py-2 flex justify-between items-center '>
        {/* Logo */}
        <div className='text-2xl font-bold tracking-widest bg-clip-text ' >Yash</div>

        {/* Hamburger Icon */}
        <div className='md:hidden'>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className='focus:outline-none'
            aria-label='Toggle navigation'
          >
            <i className='fas fa-bars text-3xl'></i>
          </button>
        </div>

        {/* Links */}
        <div className={`space-x-6 ${isOpen ? 'block' : 'hidden'} md:block`}>
          <a href='#home' className='hover:text-gray-400 dark:hover:text-gray-600 font-semibold '>
            Home
          </a>
          <a href='#about' className='hover:text-gray-400 dark:hover:text-gray-600 font-semibold '>
            About me
          </a>
          <a href='#project' className='hover:text-gray-400 dark:hover:text-gray-600 font-semibold '>
            Project
          </a>
          <a href='#contact' className='hover:text-gray-400 dark:hover:text-gray-600 font-semibold '>
            Contact
          </a>
        </div>

        {/* Theme Toggle Button (Separate) */}
        <div className='flex items-center space-x-4'>
          <button
            onClick={toggleTheme}
            className='bg-gray-200 dark:bg-gray-700 text-black dark:text-white p-2 rounded-full w-10'
          >
            {theme === 'light' ? (
              <i className='fas fa-moon'></i> // Moon icon for light mode
            ) : (
              <i className='fas fa-sun'></i> // Sun icon for dark mode
            )}
          </button>
          {/* <button className='bg-gradient-to-r from-yellow-800 to-red-900 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>
            Connect Me
          </button> */}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className='md:hidden flex flex-col space-y-4 mt-4 text-center '>
          <a href='#home' className='hover:text-gray-400 dark:hover:text-gray-600'>
            Home
          </a>
          <a href='#about' className='hover:text-gray-400 dark:hover:text-gray-600'>
            About me
          </a>
          <a href='#project' className='hover:text-gray-400 dark:hover:text-gray-600'>
            Project
          </a>
          <a href='#contact' className='hover:text-gray-400 dark:hover:text-gray-600'>
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;


