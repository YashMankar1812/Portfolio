import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faGithub, faLinkedin, faInstagram,faTwitter } from '@fortawesome/free-brands-svg-icons';
import Contact from '../components/Contact';


const Footer = () => {
  return (
    <>
    
    <Contact/>
    <section className="footer bg-gray-800 text-white py-6 dark:bg-black     ">
      <a href="" className="text-2xl text-blue-400 text-center flex justify-center "> Yash Mankar</a>.
      <div className="social-container text-center">
        <ul className="social-media flex justify-center space-x-6 mb-6">
          <li className="icon">
            <a href="https://github.com/YashMankar1812" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faGithub} className="text-2xl text-grey" />
            </a>
          </li>
          <li className="icon">
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faTwitter} className="text-2xl text-blue-400" />
            </a>
          </li>
          <li className="icon">
            <a href="https://www.linkedin.com/in/yash-mankar-50625825b/" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faLinkedin} className="text-2xl text-blue-700" />
            </a>
          </li>
          <li className="icon">
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faInstagram} className="text-2xl text-pink-500" />
            </a>
          </li>
        </ul>
        <div className="copyright">
          <p className="text-gray-400 mx-3 bg-black p-2 m-0">
          © 2025 All Rights Reserved. Designed by 💖 yash
        {/* © 2025 All Rights Reserved. Designed with <i className="fa-solid fa-heart text-red-500"></i> by  yash */}
          </p>
        </div>
      </div>
    </section>
    </>
  );
};

export default Footer;
