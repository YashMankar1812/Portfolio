import React, { useState, useEffect } from 'react';
import { CiLight, CiDark } from 'react-icons/ci'; // Theme icons
import { FaHome, FaUser, FaProjectDiagram, FaEnvelope ,FaCertificate} from 'react-icons/fa'; // Font Awesome icons

const Navbar = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(theme);
    localStorage.setItem('theme', theme);

    const handleEscapeKey = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('keydown', handleEscapeKey);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('keydown', handleEscapeKey);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 px-8 py-3 md:px-16 lg:px-24 transition-all duration-300 ${
        scrolled
          ? 'bg-gray-900 text-white'
          : theme === 'light'
          ? 'bg-black text-white shadow-lg'
          : 'bg-transparent text-white'
      }`}
    >
      <div className="py-2 flex justify-between items-center">
        <div className="text-2xl tracking-wide transition duration-500 ease-in-out transform hover:scale-110 font-poppins">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-500 group-hover:scale-x-100 transition-all duration-300 cursor-pointer">
            <a href="/">Yash Mankar</a> 
          </span>
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden ml-auto">
          <button
            onClick={toggleMenu}
            className="focus:outline-none"
            aria-label="Toggle navigation"
            aria-expanded={isOpen ? 'true' : 'false'}
            aria-controls="mobile-menu"
          >
            <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'} text-3xl pr-5`}></i>
          </button>
        </div>

        {/* Desktop Links */}

        {/* Theme Toggle Button */}
        <div className="hidden md:flex items-center space-x-2">
        <div className="hidden md:flex space-x-6 ">
          <a
            href="#home"
            className="text-gray-400 hover:text-gray-200 transition-all duration-300 group pt-2 flex items-center space-x-2"
          >
            <FaHome />
            <span className="relative">
              Home
              <span className="absolute bottom-[-4px] left-0 w-full h-[2px] bg-gradient-to-r from-pink-500 to-yellow-500 scale-x-0 group-hover:scale-x-100 transition-all duration-300"></span>
            </span>
          </a>
          <a
            href="#about"
            className="text-gray-400 hover:text-gray-200 transition-all duration-300 group pt-2 flex items-center space-x-2"
          >
            <FaUser />
            <span className="relative">
              About
              <span className="absolute bottom-[-4px] left-0 w-full h-[2px] bg-gradient-to-r from-pink-500 to-yellow-500 scale-x-0 group-hover:scale-x-100 transition-all duration-300"></span>
            </span>
          </a>
          <a
            href="#project"
            className="text-gray-400 hover:text-gray-200 transition-all duration-300 group pt-2 flex items-center space-x-2"
          >
            <FaProjectDiagram />
            <span className="relative">
              Gears
              <span className="absolute bottom-[-4px] left-0 w-full h-[2px] bg-gradient-to-r from-pink-500 to-yellow-500 scale-x-0 group-hover:scale-x-100 transition-all duration-300"></span>
            </span>
          </a>
          {/* Add certification section  */}
          <a
            href="#certificate"
            className="text-gray-400 hover:text-gray-200 transition-all duration-300 group pt-2 flex items-center space-x-2"
          >
            <FaCertificate />
            <span className="relative">
              Certification
              <span className="absolute bottom-[-4px] left-0 w-full h-[2px] bg-gradient-to-r from-pink-500 to-yellow-500 scale-x-0 group-hover:scale-x-100 transition-all duration-300"></span>
            </span>
            </a>
         

          <a
            href="#contact"
            className="text-gray-400 hover:text-gray-200 transition-all duration-300 group pt-2 flex items-center space-x-2"
          >
            <FaEnvelope />
            <span className="relative">
              Contact
              <span className="absolute bottom-[-4px] left-0 w-full h-[2px] bg-gradient-to-r from-pink-500 to-yellow-500 scale-x-0 group-hover:scale-x-100 transition-all duration-300"></span>
            </span>
          </a>
        </div>  
          <button onClick={toggleTheme} className="focus:outline-none text-xl text-white ">
            {theme === 'light' ? <CiDark /> : <CiLight />}
          </button>
        </div>
      </div>

{/* Mobile Menu */}
{/* Mobile Menu */}
<div
  id="mobile-menu"
  className={`fixed inset-0 z-40 flex flex-col items-center justify-center bg-gray-900 text-white space-y-10 p-4 transform ${
    isOpen ? 'translate-x-0' : 'translate-x-full'
  } transition-transform duration-300 ease-in-out`}
>
  {/* Close Button */}
  <div className="absolute top-4 right-4">
    <button
      onClick={toggleMenu}
      className="focus:outline-none"
      aria-label="Close navigation"
    >
      <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'} text-3xl`}></i>
    </button>
  </div>

  {/* Navigation Links with Hover Labels */}
  <div className="space-y-6">
    <div className="relative group">
      <a
        href="#home"
        onClick={closeMenu}
        className="hover:text-gray-400 flex items-center space-x-2"
      >
        <FaHome className="text-2xl" />
      </a>
      {/* Tooltip */}
      <span className="absolute bottom-full mb-2 hidden group-hover:block bg-gray-700 text-white text-sm px-2 py-1 rounded">
        Home
      </span>
    </div>

    <div className="relative group">
      <a
        href="#about"
        onClick={closeMenu}
        className="hover:text-gray-400 flex items-center space-x-2"
      >
        <FaUser className="text-2xl" />
      </a>
      {/* Tooltip */}
      <span className="absolute bottom-full mb-2 hidden group-hover:block bg-gray-700 text-white text-sm px-2 py-1 rounded">
        About
      </span>
    </div>

    <div className="relative group">
      <a
        href="#project"
        onClick={closeMenu}
        className="hover:text-gray-400 flex items-center space-x-2"
      >
        <FaProjectDiagram className="text-2xl" />
      </a>
      {/* Tooltip */}
      <span className="absolute bottom-full mb-2 hidden group-hover:block bg-gray-700 text-white text-sm px-2 py-1 rounded">
        Projects
      </span>
    </div>

    <div className="relative group">
      <a
        href="#certificate"
        onClick={closeMenu}
        className="hover:text-gray-400 flex items-center space-x-2"
      >
        <FaCertificate className="text-2xl" />
      </a>
      {/* Tooltip */}
      <span className="absolute bottom-full mb-2 hidden group-hover:block bg-gray-700 text-white text-sm px-2 py-1 rounded">
        Certifications
      </span>
    </div>

    <div className="relative group">
      <a
        href="#contact"
        onClick={closeMenu}
        className="hover:text-gray-400 flex items-center space-x-2"
      >
        <FaEnvelope className="text-2xl" />
      </a>
      {/* Tooltip */}
      <span className="absolute bottom-full mb-2 hidden group-hover:block bg-gray-700 text-white text-sm px-2 py-1 rounded">
        Contact
      </span>
    </div>
  </div>
</div>



    </nav>
  );
};

export default Navbar;







