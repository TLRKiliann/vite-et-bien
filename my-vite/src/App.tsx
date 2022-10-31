import React, { useState } from 'react'
import { Routes, Route} from 'react-router-dom';
import { NavBar } from './Components/NavBar';
import { Home } from './Pages/Home';
import { Services } from './Pages/Services';
import { Contact } from './Pages/Contact';
import { Allergies } from './Components/Allergies';
import { Commandes } from './Components/Commandes';
import bgImg from './assets/images/bread_bg.png';
import './App.scss'


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
        <Route exact path='/' element={<Home />} />
        <Route path='/services' element={<Services />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/commandes' element={<Commandes />}/>
        <Route path='/allergies' element={<Allergies />}/>
      </Routes>
    </div>
  )
}

export default App;
