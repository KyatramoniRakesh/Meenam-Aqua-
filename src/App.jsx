import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Banner from './components/Banner';
import AboutSection from './components/About';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Banner/>
    <AboutSection/>
    <Footer/>
    
    </>
  )
}

export default App
