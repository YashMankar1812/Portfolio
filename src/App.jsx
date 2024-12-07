import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skill'
import Projects from './components/Project'
import Academics from './components/Academics'
import Contact from './components/Contact'
import Footer from './components/Footer'
import TypingText from './components/TypingText'
import Certifications from './components/Certification'





function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };
  

  return (
    <>                                 
     <div className="bg-gradient-to-r from-[#e02aff] via-[#c12127] to-[#fb8817] border-t border-gray-300  pt-2 text-center ">
    </div>
    <Navbar toggleTheme = {toggleTheme}/>
    <Hero/>
    <About/>
    <Skills/>
    <Certifications/>
    <Academics/>
    <Projects/>
    {/* <Contact/> */}
    <Footer/>
      <div className="bg-gradient-to-r from-[#e02aff] via-[#c12127] to-[#fb8817] border-t border-gray-300  pt-2 text-center ">
      </div>
    </>
  )
}

export default App
