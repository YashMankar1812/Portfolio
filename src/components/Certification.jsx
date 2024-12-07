import React, { useState } from 'react';

const certifications = [
  {
    id:1,
    title: "Responsive Web Design",
    organization: "freeCodeCamp",
    imgSrc: "/src/assets/freecodecamp.png", // Replace with actual image path
    // link: "https://www.freecodecamp.org/certification/yashmankar/responsive-web-design"
  },
  {
    id:2,
    title: "Front End Development Libraries",
    organization: "SkyScanner",
    imgSrc: "src/assets/Skyscanner.png", // Replace with actual image path
    // description: "Certification on front-end development tools and libraries, including React, Redux, Bootstrap, and jQuery.",
    // link: "https://www.linkedin.com/in/yash-mankar-50625825b/recent-activity/images/"
  },
  {
    id:3,
    title: "Java Basic",
    organization: "Geekster",
    imgSrc: "src/assets/Screenshot 2024-05-27 125546.png", // Replace with actual image path
    // description: "Certification on Java programming, covering basic syntax, OOP concepts, and problem-solving techniques.",
    // link: "https://www.linkedin.com/in/yash-mankar-50625825b/recent-activity/images/"
  },
  {
    id:4,
    title: "Git & GitHub",
    organization: "Geekster",
    imgSrc: "src/assets/Screenshot 2024-06-02 233140.png", // Replace with actual image path
    // description: "Comprehensive certification on Git version control and GitHub repository management.",
    // link: "https://www.linkedin.com/in/yash-mankar-50625825b/recent-activity/images/"
  },
];

const Certifications = () => {
  const [activeCert, setActiveCert] = useState(certifications[0]);

  const handleCertClick = (cert) => {
    setActiveCert(cert);
  };

  return (
    <section
      style={{
        background: 'linear-gradient(to top, #1a1a2e, #16213e, #0f3460)',
      }}
      className="py-16 h-screen"
      id="certificate"
    >
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row gap-6 mt-22">
        {/* Left Side - Certification List */}
        <div className="w-full md:w-1/3 bg-transparent text-gray-300 p-4">
          <h2 className="text-4xl font-bold text-center text-gray-100 mb-8 dark:text-white mt-10">
            My
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
              {" "}
              Certifications
            </span>
          </h2>
          <ul className="space-y-4">
            {certifications.map((cert, index) => (
              <li
                key={index}
                className={`group relative cursor-pointer py-2 px-4 rounded-lg  ${
                  activeCert.title === cert.title ? " border border-cyan-800" : ""
                }`}
                onClick={() => handleCertClick(cert)}
              >
                <span>{cert.title}</span>
              </li>
            ))}
          </ul>
        </div>

{/* Right Side - Certification Details */}
<div className="w-full md:w-2/3 bg-transparent text-gray-100 relative overflow-hidden">
  {/* Sliding Animation */}
  <div
    className="absolute inset-0 transform transition-transform duration-500 h-screen"
    style={{ transform: `translateX(${activeCert ? 0 : "-100%"})` }}
  >
    <div className="flex flex-col items-center text-center mt-10 ">
      <img
        src={activeCert.imgSrc}
        alt={activeCert.title}
        className="w-90 h-60 object-contain rounded-lg mb-4" // Fixed the width and height here
      />
      <h4 className="text-3xl font-bold ">{activeCert.title}</h4>
      <p className="text-yellow-400">{activeCert.organization}</p>
      {/* <p className="text-gray-300 mt-4">{activeCert.description}</p>
      <a
        href={activeCert.link}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 px-6 py-2 bg-blue-500 hover:bg-blue-700 text-white rounded-lg"
      >
        View Certificate
      </a> */}
    </div>
  </div>
</div>

      </div>
    </section>
  );
};

export default Certifications;


