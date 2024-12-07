import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
// import { AiFillEye } from 'react-icons/ai'; // Example using Ant Design icons
import GymProjectImage from '../assets/Gym.png';



const Projects = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 6; // Number of projects per page

  const projects = [
    {
      title: 'Gym Project',
      imgSrc: GymProjectImage ,
      liveDemo: 'https://gym-project-green-delta.vercel.app/',
      // githubRepo: 'https://github.com/username/gym-project',
      description: 'A fully responsive gym website with modern UI .',
      language: 'HTML/CSS', // Add language here
    },
    {
      title: 'Business Page',
      imgSrc: '../assets/Bussiness.png',
      liveDemo: 'https://yashmankar1812.github.io/BussinessPage/',
      // githubRepo: 'https://github.com/yashmankar1812/BussinessPage',
      description: 'A sleek business page to showcase company services and products.',
      language: 'HTML/Tailwind',
    },
    // {
    //   title: 'Camping Services',
    //   imgSrc: '../assets/Camping.png',
    //   liveDemo: 'https://weekly-t-4.vercel.app',
    //   githubRepo: 'https://github.com/username/camping-services',
    //   description: 'A landing page for camping services with booking options.',
    //   language: 'Html/CSS',
    // },
    {
      title: 'Amazon UI',
      imgSrc: '../assets/Amazon.png',
      liveDemo: 'https://yashmankar1812.github.io/Weekly_Test-5/',
      // githubRepo: 'https://github.com/yashmankar1812/Weekly_Test-5',
      description: 'A replica of the Amazon UI with responsive features.',
      language: 'HTML/CSS',
    },
    {
      title: 'YouTube UI',
      imgSrc: '../assets/youtube.png',
      liveDemo: 'https://youtube-ui-ten.vercel.app/',
      // githubRepo: 'https://github.com/YashMankar1812/Youtube_UI',
      description: 'A UI clone of YouTube with dark mode support.',
      language: 'Html/CSS',
    },


    // Javascript 
    {
      title: 'Divi Team Work',
      imgSrc: '../assets/Divi.png',
      liveDemo: 'https://aditya234892.github.io/ELEGANT-THEMES-Team/divi/divi',
      // githubRepo: 'https://github.com/aditya234892/ELEGANT-THEMES-Team',
      description: 'A collaborative project with the Divi Elegant theme integration.',
      language: 'Javascript',
    },
    {
      title : 'Basic Calulator',
      imgSrc: 'src/assets/Calci.png',
      liveDemo : 'https://unified-mentor-4gmv.vercel.app/',
      // githubRepo: 'https://github.com/YashMankar1812/Unified_Mentor/tree/main/0_Basic_Calculator',
      description: 'A basic calculator web app.',
      language: 'Javascript',
    },
    {
      title: 'Emoji App',
      imgSrc: 'src/assets/Emoji.png',
      liveDemo: 'https://emogi.netlify.app/',
      // githubRepo: 'https://github.com/YashMankar1812/Emoji',
      description: 'A web app to find and share emojis.',
      language: 'Javascript',
    },
    {
      title: 'BurgerKing',
      imgSrc: 'src/assets/BurgerKing.png',
      liveDemo: 'https://burger-king-chi.vercel.app/',
      // githubRepo: 'https://github.com/YashMankar1812/Burger-King',
      description: 'A web app for ordering burgers at Burger King.',
      language: 'Javascript',
    },
    {
      title: 'Pokemon App',
      imgSrc: '../assets/Pokemon.png',
      liveDemo: ' https://yashmankar1812.github.io/Pokemon/',
      // githubRepo: 'https://github.com/YashMankar1812/Pokemon',
      description: 'A web app to explore and search for Pokémon information.',
      language: 'Javascript',
    },
    
    {
      title: 'Movie App',
      imgSrc: '../assets/MovieApp.png',
      liveDemo: 'https://moviesearchappp.netlify.app/',
      // githubRepo: 'https://github.com/YashMankar1812/Movie-Search',
      description: 'A web app for searching movies, displaying details, and user reviews.',
      language: 'Javascript',
    },



    // React projects 

    {
      title: 'Image Generator',
      imgSrc: '../assets/ImageGeneration.png',
      liveDemo: 'https://geekster-react-js-ft43.vercel.app/',
      // githubRepo: 'https://github.com/YashMankar1812/Geekster-React_JS/tree/main/Axios_hlw',
      description: 'An image generator that lets users create and customize images with different styles.',
      language: 'React',
    },
    {
      title: 'Cart Management',
      imgSrc: '../assets/Ecommerce.png',
      liveDemo: 'https://geekster-react-js-a8ls.vercel.app/',
      // githubRepo: 'https://github.com/YashMankar1812/Geekster-React_JS/tree/main/Day_6_Hlw',
      description: 'Managing a shopping cart, allowing users to add products and adjust quantities.',
      language: 'React',
    },
    {
      title: 'People Info Management',
      imgSrc: '../assets/PeopleManagement.png',
      liveDemo: 'https://geekster-react-js-36l9.vercel.app/ ',
      // githubRepo: 'https://github.com/YashMankar1812/Geekster-React_JS/tree/main/Weekly-T-3',
      description: 'A web app for managing and displaying user information.',
      language: 'React',
    }
  ];

  // Filter projects by language
  const filteredProjects = selectedLanguage === 'All' 
    ? projects 
    : projects.filter(project => project.language === selectedLanguage);

  // Calculate total pages
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);

  // Get current projects based on pagination
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = filteredProjects.slice(indexOfFirstProject, indexOfLastProject);

  return (
    <section 
    style={{
      background: 'linear-gradient(to top, #1a1a2e, #16213e, #0f3460)',    }}
    className="project-section py-16  h-full dark:bg-white " id="project">
      <div className="text-center justify-evenly">
        <h2 className="text-4xl font-bold text-gray-400 dark:text-white mt-5">
          My <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-blue-500">Projects</span>
        </h2>

        {/* Language Filter Buttons */}
        <div className="my-4 flex justify-center space-x-4 mb-10">
  {['All', 'HTML/CSS', 'Javascript', 'React','Mern'].map((language) => (
    <button
      key={language}
      onClick={() => {
        setSelectedLanguage(language);
        setCurrentPage(1); // Reset to the first page
      }}
      className={`relative bg-transparent flex text-gray-200 px-2 py-2 rounded transition duration-300 ease-in-out ${
        selectedLanguage === language ? 'bg-blue-600' : ''
      } group`}
    >
      {language}
      {/* Gradient underline */}
      <span
        className="absolute bottom-[-4px] left-0 w-full h-[2px] bg-gradient-to-r from-pink-500 to-yellow-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
      ></span>
    </button>
  ))}
</div>


        {/* Language Filter Buttons */}


      </div>
  
      <div className="project-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-8 md:px-16">
      {/* <div className="project-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-8 md:px-16"> */}
        {currentProjects.map((project, index) => (
          <div key={index} className="project-item group relative overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
            <img
              src={project.imgSrc}
              alt={project.title }
              className="w-full h-53 object-cover transition-transform duration-500 transform group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-black bg-opacity-80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-6 flex flex-col justify-center items-center">
            <a
  href={project.liveDemo}
  target="_blank"
  rel="noopener noreferrer"
  className=" text-white px-4 py-2 rounded-lg font-medium flex items-center space-x-2  transition"
>
<i className="fas fa-eye text-xl"></i> 
</a>
              <h3 className="text-white text-2xl font-semibold mb-4">{project.title}</h3>

              <p className="text-gray-300 text-sm text-center mb-4">{project.description}</p>
              <div className="flex space-x-4">
                {/* <a
                  href={project.githubRepo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-pink-400 to-purple-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-purple-600 transition flex items-center space-x-2"
                >
                  <FontAwesomeIcon icon={faGithub} />
                </a> */}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mx-6 my-6">
        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
          className="bg-gray-800 text-white px-4 py-2 rounded mx-2 disabled:opacity-50"
        >
          Previous
        </button>
        
        <span className="text-white">{`${currentPage} of ${totalPages}`}</span>
        <button
          onClick={() => setCurrentPage(currentPage + 2)}
          disabled={currentPage === totalPages}
          className="bg-gray-800 text-white px-4 py-2 rounded mx-2 disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </section>
  );
};

export default Projects;
