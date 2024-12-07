import React, { useState, useEffect } from 'react';
import TypingText from './TypingText';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import HeroImage from '../assets/WhatsApp_Image_2024-09-22_at_13.05.17_e9af4edf-removebg-preview (1).png';

const Hero = () => {
  const [showImageAndText, setShowImageAndText] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    // Switch from greeting to image and text after 5 seconds
    const timer = setTimeout(() => {
      setShowImageAndText(true);
    }, 3000);

    // Apply the theme class to the document element
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(theme);
    localStorage.setItem('theme', theme);

    return () => clearTimeout(timer); // Cleanup on unmount
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div
      className="min-h-screen min-w-full flex flex-col justify-center items-center py-16 text-white sm:20"
      id="home"
      style={{
        background: theme === 'dark'
          ? '#1a1a2e' // dark mode background
          : 'linear-gradient(to bottom, #1a1a2e, #16213e, #0f3460)',
      }}
    >
      {!showImageAndText ? (
        <div className="text-center opacity-100 transition-opacity duration-1000 ease-in-out">
          <h1 className="text-5xl font-bold py-4 mx-5 mb-5 animate__animated animate__fadeInLeft">
            Hey 👋🏻 Everyone
          </h1>
          <p className="font-3xl mt-4 text-xl text-gray-300 animate__animated animate__fadeInLeft">
            I specialize in building modern and responsive web applications
          </p>
        </div>
      ) : (
        <div className="flex flex-col md:flex-row justify-center items-center md:items-center md:space-x-10 opacity-100 transition-opacity duration-1000 ease-in-out">
          {/* Left Image */}
          <div className="w-full md:w-1/2 flex justify-center mb-4 md:mb-0 opacity-100 transition-opacity duration-1000 ease-in-out mt-10">
            <div className="relative">
              {/* Animated Circle */}
              <div className="absolute inset-0 w-80 h-80 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 animate-circlePulse"></div>

              {/* Image */}
              <img
                src={HeroImage}
                alt="Your Avatar"
                className="relative z-10 rounded-full h-80 w-80 transition-transform duration-300 hover:scale-105 animate__animated animate__fadeInLeft"
              />
            </div>
          </div>

          {/* Right Text */}
          <div className="w-full md:w-1/2 text-center md:text-left opacity-100 transition-opacity duration-1000 ease-in-out animate__animated animate__fadeInRight">
            <TypingText />
            <p className="text-lg text-gray-400 mb-4 mt-4">
              Passionate web developer creating dynamic and user-friendly websites. Skilled in JavaScript, React, and modern web technologies.
            </p>
            <div className="mt-10">
              <a
                href="your-resume-link.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-teal-400 to-blue-500 text-white px-6 py-4 rounded-full hover:transform transition-all duration-300 ease-in-out hover:bg-[linear-gradient(to_right,_#ff007f,_#ff9900)]"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Social icons section */}
      <div className="mt-12">
        <div className="flex justify-center space-x-6">
          <a
            href="https://github.com/YashMankar"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl transform transition-transform duration-300 hover:scale-110"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/yash-mankar/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl transform transition-transform duration-300 hover:scale-110"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;



// import React, { useState, useEffect } from 'react';
// import TypingText from './TypingText';
// import { FaGithub, FaLinkedin } from 'react-icons/fa';
// import HeroImage from '../assets/WhatsApp_Image_2024-09-22_at_13.05.17_e9af4edf-removebg-preview (1).png'
// // import HeroImage from '.pu/WhatsApp_Image_2024-09-22_at_13.05.17_e9af4edf-removebg-preview (1).png'


// const Hero = ( ) => {
//   const [showImageAndText, setShowImageAndText] = useState(false);
//   const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

//   useEffect(() => {
//     // Switch from greeting to image and text after 5 seconds
//     const timer = setTimeout(() => {
//       setShowImageAndText(true);
//     }, 3000); 

//     // Apply the theme class to the document element
//     document.documentElement.classList.remove('light', 'dark');
//     document.documentElement.classList.add(theme);
//     localStorage.setItem('theme', theme);

//     return () => clearTimeout(timer); // Cleanup on unmount
//   }, [theme]);

//   const toggleTheme = () => {
//     setTheme(theme === 'light' ? 'dark' : 'light');
//   };

//   return (
//     <div
//       className="min-h-screen min-w-full flex flex-col justify-center items-center py-16 text-white sm:20 "
//       id="home"
//       style={{
//         background: theme === 'black'
//           ? 'light' // dark mode background
//           // : "red"
//           : 'linear-gradient(to bottom, #1a1a2e, #16213e, #0f3460)',
//       }}
//     >
//       {!showImageAndText ? (
//         // Initial greeting view
//         <div className="text-center opacity-100 transition-opacity duration-1000 ease-in-out">
//           <h1 className="text-5xl font-bold py-4 mx-5 mb-5 animate__animated animate__fadeInLeft">
//             Hey 👋🏻 Everyone
//           </h1>
//           <p className="font-3xl mt-4 text-xl text-gray-300 animate__animated animate__fadeInLeft">
//             I specialize in building modern and responsive web applications
//           </p>
//         </div>
//       ) : (
//         // After timer, show image and text layout with transition
//         <div className="flex flex-col md:flex-row justify-center items-center md:items-center md:space-x-10 opacity-100 transition-opacity duration-1000 ease-in-out">
//           {/* Left Image */}
//           <div className="w-full md:w-1/2 flex justify-center mb-4 md:mb-0 opacity-100 transition-opacity duration-1000 ease-in-out mt-10">
//             <div className= " font-bold border border-gradient-to-r from-purple-500 to-indigo-500 rounded-full p-1 transition-all duration-300 ease-in-out hover:from-blue-500 hover:to-green-500">
//               <img
//                 src={HeroImage} // Replace with your image URL
//                 alt="Your Avatar"
//                 className="rounded-full h-80 w-90 xs:w-44 lg:w-110 transition-transform duration-300 hover:scale-105  animate__animated animate__fadeInLeft"
//               />
//             </div>
//           </div>

//           {/* Right Text */}
//           <div className="w-full md:w-1/2 text-center md:text-left opacity-100 transition-opacity duration-1000 ease-in-out animate__animated animate__fadeInRight">
//             <TypingText />
//             <p className="text-lg text-gray-400 mb-4 mt-4 ">
//               Passionate web developer creating dynamic and user-friendly websites. Skilled in JavaScript, React, and modern web technologies.
//             </p>
//             <div className="mt-10">
//               <a
//                 href="your-resume-link.pdf"  
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="bg-gradient-to-r from-teal-400 to-blue-500 text-white px-6 py-4 rounded-full hover:transform transition-all duration-300 ease-in-out hover:bg-[linear-gradient(to_right,_#ff007f,_#ff9900)]  "
//               >
//                 Download Resume
//                 <span className="absolute inset-0 bg-gradient-to-r from-pink-500 to-orange-500 transform scale-x-0 transition-all duration-300 ease-in-out group-hover:scale-x-100"></span>
//               </a>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Social icons section */}
//       <div className="mt-12">
//         <div className="flex justify-center space-x-6">
//           <a
//             href="https://github.com/YashMankar"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-3xl transform transition-transform duration-300 hover:scale-110"
//           >
//             <FaGithub />
//           </a>
//           <a
//             href="https://www.linkedin.com/in/yash-mankar/"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-3xl transform transition-transform duration-300 hover:scale-110"
//           >
//             <FaLinkedin />
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;
