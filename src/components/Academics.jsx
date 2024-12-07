import React from 'react';

const Academics = () => {
  const educationDetails = [
    {
      level: "SSC-X (2017-2018)",
      school: "Om Sai International Public School Sausar",
      board: "CBSE School Education",
      percentage: "8.6 CGPA",
    },
    {
      level: "HSC-XII (2019-2020)",
      school: "New Sunflower Higher Secondary School Sausar",
      board: "State Board of Education",
      percentage: "69.9%",
    },
    {
      level: "BCA (2020-2022)",
      school: "Santaji Mahavidhyalay Nagpur University",
      board: "RTMNU University Nagpur",
      percentage: "79.96%",
    },
  ];

  return (
    <div 
    style={{
      background: 'linear-gradient(to bottom, #1a1a2e, #16213e, #0f3460)',    }}
     className=" text-gray-200 py-20 dark:bg-white">
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-4xl font-bold text-gray-400 dark:text-white text-center py-8">
        My <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to to-blue-500">Academics</span>
      </h2>
      {/* Responsive grid layout for displaying divs in a row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {educationDetails.map((education, index) => (
          <div
            key={index}
            className="p-6 bg-trasnparent shadow-lg rounded-lg border border-gray-200  dark:border-gray-200 transition-transform duration-300 hover:scale-105"
          >
            <h3 className="text-2xl font-semibold mb-2 text-yellow-200 dark:text-yellow-600">{education.level}</h3>
            <p className="text-gray-100 dark:text-gray-00">{education.school}</p>
            <p className="text-gray-500 dark:text-gray-400">{education.board}</p>
            <p className="font-semibold text-green-500 dark:text-pink-200 mt-4">Per :   {education.percentage}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
  
    
  );
};

export default Academics;
