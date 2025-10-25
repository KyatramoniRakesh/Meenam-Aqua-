import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProductsPage from './components/Products/ProductsPage';
import Contact from './pages/Contact';
import Aboutus from './pages/Aboutus';
import Gallery from './pages/Gallery';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/products' element={<ProductsPage/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/about' element={<Aboutus/>}/>
      <Route path='/gallery' element={<Gallery/>}/>
    </Routes>
   
    <Footer/>
    
    </>
  )
}

export default App
