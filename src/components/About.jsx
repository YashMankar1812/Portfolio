
import React from 'react';
import AboutImage from '../assets/WhatsApp Image 2024-06-15 at 16.59.58_99ad427c.jpg';

const About = () => {
  return (
    <div
      className="py-20 text-gray-200 dark:text-black h-full"
      id="about"
      style={{
        background: 'linear-gradient(to top, #1a1a2e, #16213e, #0f3460)',
      }}
    >
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-right mb-12 "><span className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 to to-blue-500'>About Me</span></h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <img
            src={AboutImage}
            alt="About Yash Mankar"
            className="w-72 h-80 rounded object-cover mb-8 md:mb-0"
          />
          <div className="flex-1">
            <p className="text-lg mb-8 text-gray-400 dark:text-gray-200">
              Hello! My name is <span className='text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-500'>Yash Mankar</span>, a passionate and enthusiastic learner currently diving deep into the world of software development. I completed my graduation in 2022 in (BCA) from RTMNU University Nagpur. <br />
              <br />
              With a keen interest in building dynamic and user-friendly applications, I’m constantly expanding my skill set in <span className='font-semibold  text-transparent bg-clip-text bg-purple-200'>Fronted And Backend</span>
              <br />
              <br />

              I’m always eager to take on new challenges, collaborate with others, and bring ideas to life through code. Let’s connect and create something amazing together!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
