import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJs, faGitAlt, faGithub, faReact, faNodeJs, faBootstrap, faJava } from '@fortawesome/free-brands-svg-icons';
import { SiFirebase, SiMongodb } from 'react-icons/si';
import { BiLogoVisualStudio } from "react-icons/bi";
import { faWind } from '@fortawesome/free-solid-svg-icons';

const Skills = () => {
  return (
    <section id="skill"
    style={{
      background: 'linear-gradient(to bottom, #1a1a2e, #16213e, #0f3460)',
    }}
    className="py-16 bg-black dark:bg-white h-full">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl font-bold text-gray-400 dark:text-black dark:text-white">
          My <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-blue-500">Skills</span>
        </h1>
        <p className="mt-4 text-gray-400  font-semibold mx-5 dark:text-gray-">
          Here are some of the skills I have acquired during my journey as a web developer...
        </p>

        {/* Frontend Skills */}
        <div className="mt-5 px-8 py-9">
          <h2 className="text-3xl font-bold text-gray-400 dark:text-white mb-6 text-justify">Frontend</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mx-8">
            {/* <div className="skill_card p-6 bg-white shadow-lg rounded-lg hover:bg-indigo-100 dark:hover:bg-orange-200 transform transition-transform duration-300 hover:scale-105"> */}
              <FontAwesomeIcon icon={faHtml5} className="text-6xl text-orange-500 transform transition-transform duration-300 hover:scale-105" />
            {/* </div> */}
            {/* <div className="skill_card p-6 bg-white shadow-lg rounded-lg hover:bg-indigo-100 dark:hover:bg-indigo-200 transform transition-transform duration-300 hover:scale-105"> */}
              <FontAwesomeIcon icon={faCss3Alt} className="text-6xl text-blue-500 transform transition-transform duration-300 hover:scale-105" />
            {/* </div> */}
            {/* <div className="skill_card p-6 bg-white shadow-lg rounded-lg hover:bg-indigo-100 dark:hover:bg-yellow-200 transform transition-transform duration-300 hover:scale-105"> */}
              <FontAwesomeIcon icon={faJs} className="text-6xl text-yellow-500 transform transition-transform duration-300 hover:scale-105" />
            {/* </div> */}
            {/* <div className="skill_card p-6 bg-white shadow-lg rounded-lg hover:bg-indigo-100 dark:hover:bg-cyan-200 transform transition-transform duration-300 hover:scale-105"> */}
              <FontAwesomeIcon icon={faReact} className="text-6xl text-cyan-500 transform transition-transform duration-300 hover:scale-105" />
            {/* </div> */}
            {/* <div className="skill_card p-6 bg-white shadow-lg rounded-lg hover:bg-indigo-100 dark:hover:bg-purple-200 transform transition-transform duration-300 hover:scale-105"> */}
              <FontAwesomeIcon icon={faBootstrap} className="text-6xl text-purple-600 transform transition-transform duration-300 hover:scale-105" />
              
              <FontAwesomeIcon icon={faWind} className="text-6xl text-teal-500 transform transition-transform duration-300 hover:scale-105" />
            {/* </div> */}
          </div>
        </div>

        {/* Backend Skills */}
        <div className="mt-5 px-8 py-9">
          <h2 className="text-3xl font-bold text-gray-400 dark:text-white  mb-6 text-justify">Backend</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 mx-8">
            {/* <div className="skill_card p-6 bg-white shadow-lg rounded-lg hover:bg-indigo-100 dark:hover:bg-green-200 transform transition-transform duration-300 hover:scale-105"> */}
              <FontAwesomeIcon icon={faNodeJs} className="text-6xl text-green-500 transform transition-transform duration-300 hover:scale-105" />
            {/* </div> */}
            {/* <div className="skill_card p-6 bg-white shadow-lg rounded-lg hover:bg-indigo-100 dark:hover:bg-yellow-200 transform transition-transform duration-300 hover:scale-105"> */}
              <SiFirebase size="40px" color="#FFCA28" className="transform transition-transform duration-300 hover:scale-105"/>
            {/* </div> */}
            {/* <div className="skill_card p-6 bg-white shadow-lg rounded-lg hover:bg-indigo-100 dark:hover:bg-green-200 transform transition-transform duration-300 hover:scale-105"> */}
              <SiMongodb size="40px" color="#47A248" className="transform transition-transform duration-300 hover:scale-105"/>
            {/* </div> */}
            {/* <div className="skill_card p-6 bg-white shadow-lg rounded-lg hover:bg-indigo-100 dark:hover:bg-red-200 transform transition-transform duration-300 hover:scale-105"> */}
              <FontAwesomeIcon icon={faJava} className="text-6xl text-red-600 transform transition-transform duration-300 hover:scale-105" />
            {/* </div> */}
          </div>
        </div>

        {/* Tools */}
        <div className="mt-5  px-8 py-9">
          <h2 className="text-3xl font-bold text-gray-400 dark:text-white  mb-3 text-justify">Tools</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 mx-8">
            {/* <div className="skill_card p-6 bg-white shadow-lg rounded-lg hover:bg-indigo-100 dark:hover:bg-red-200 transform transition-transform duration-300 hover:scale-105"> */}
              <FontAwesomeIcon icon={faGitAlt} className="text-6xl text-red-500 transform transition-transform duration-300 hover:scale-105" />
            {/* </div> */}
            {/* <div className="skill_card p-6 bg-white shadow-lg rounded-lg hover:bg-indigo-100 dark:hover:bg-gray-700 transform transition-transform duration-300 hover:scale-105"> */}
              <FontAwesomeIcon icon={faGithub} className="text-6xl text-gray-400 transform transition-transform duration-300 hover:scale-105" />
            {/* </div> */}
            {/* <div className="skill_card p-6 bg-white shadow-lg rounded-lg hover:bg-indigo-100 dark:hover:bg-teal-200 transform transition-transform duration-300 hover:scale-105"> */}
              {/* <FontAwesomeIcon icon={faWind} className="text-6xl text-teal-500 transform transition-transform duration-300 hover:scale-105" /> */}
            {/* </div> */}
            {/* <SiVisualstudiocode size="40px" color="#007ACC"  className="text-6xl text-teal-500 transform transition-transform duration-300 hover:scale-105" /> */}
            <BiLogoVisualStudio size="40px" color="#007ACC"  className="text-6xl text-teal-500 transform transition-transform duration-300 hover:scale-105" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;