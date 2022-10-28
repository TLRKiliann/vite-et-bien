import { useState } from 'react'
import { Routes, Route} from 'react-router-dom';
import { NavBar } from './Components/NavBar';
import { Home } from './Pages/Home';
import { Services } from './Pages/Services';
import { Contact } from './Pages/Contact';
import bgImg from './assets/images/bread_bg.png';
import './App.css'

const App = () => {
  return (
    <div className="origin--div">
      <div className="img_bg">
        <img
          className="image_bg"
          src={bgImg}
          alt="no img bg" />
      </div>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Services' element={<Services />} />
        <Route path='/Contact' element={<Contact />} />
      </Routes>
    </div>
  )
}

export default App;
