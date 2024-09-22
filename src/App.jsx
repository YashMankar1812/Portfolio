import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skill'
import Projects from './components/Project'
// import Academics  from './components/Academics'
import Contact from './components/Contact'
import Footer from './components/Footer'
import TypingText from './components/TypingText'




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Hero/>
    {/* <div className="min-h-screen flex items-center justify-center bg-gray-100"> */}
    {/* </div> */}
    <About/>
    {/* <Academics/>   */}
    <Skills/>
    <Projects/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App
