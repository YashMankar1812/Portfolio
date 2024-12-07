import React, { useEffect, useState } from 'react';

const TypingText = () => {
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const texts = ['Hello :)',
"Hi, I'm Yash Mankar",
"A Passionate Developer",
"Turning Ideas into Code",
"Shaping the Web Experience",
"Front-End Developer & UI Enthusiast",
"Bringing Pixels to Life",
"Building Digital Experiences",
"Mastering Front-End Technologies",
"Crafting Beautiful Interfaces",
"Transforming Designs into Code",
"Building Responsive Websites",
"Passionate About Clean Code",
"Designing with User in Mind",
"Writing Code That Matters",
"Animating Web Experiences",
"Coding Beyond Expectations",
"Bringing Ideas to the Browser",
"Innovating with Modern Web Tech",
"Turning Ideas into Visual Reality",
"Focusing on User-Friendly Designs",
"Front-End Developer & UI Enthusiast",
"Designing with Passion and Purpose",
"Coding with Creativity and Precision",
"Optimizing for Performance and Speed",
"Creating Interactive User Experiences",

  //  'I’m Yash Mankar',
  //  'Coder',
  //  'Tech Explorer',
  //  'Creative Thinker',
  // 'UI/UX Designer',
  // 'Innovator'
  // ,'Front-End Developer' ,
];
  const typingDelay = 10;
  const erasingDelay = 40;
  const newTextDelay = 1500;

  useEffect(() => {
    let typingTimeout;
    let erasingTimeout;

    if (isTyping && charIndex < texts[index].length) {
      typingTimeout = setTimeout(() => {
        setCharIndex((prevCharIndex) => prevCharIndex + 1);
      }, typingDelay);
    } else if (!isTyping && charIndex > 0) {
      erasingTimeout = setTimeout(() => {
        setCharIndex((prevCharIndex) => prevCharIndex - 1);
      }, erasingDelay);
    } else if (isTyping && charIndex === texts[index].length) {
      setTimeout(() => setIsTyping(false), newTextDelay);
    } else if (!isTyping && charIndex === 0) {
      setIsTyping(true);
      setIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }

    return () => {
      clearTimeout(typingTimeout);
      clearTimeout(erasingTimeout);
    };
  }, [charIndex, isTyping, texts, index]);

  return (
    <div className="name-container text-center">
      <div className="text-container text-justify">
        <span id="text" className="   text-2xl lg:text-3xl max-w-[90%] m-auto font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to to-blue-500 mx-9 " > 
          {texts[index].substring(0, charIndex)}
        </span>
      </div>
    </div>
  );
};

export default TypingText
