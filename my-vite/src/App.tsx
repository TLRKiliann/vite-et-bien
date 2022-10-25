import { useState } from 'react'
import { Routes, Route} from 'react-router-dom';
import { NavBar } from './Components/NavBar';
import { Home } from './Pages/Home';
import { Menu } from './Pages/Menu';
import { Services } from './Pages/Services';
import './App.css'


const App = () => {
  return (
    <div className="origin--div">
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Menu' element={<Menu />} />
        <Route path='/services' element={<Services />} />
      </Routes>
    </div>
  )
}

export default App;
