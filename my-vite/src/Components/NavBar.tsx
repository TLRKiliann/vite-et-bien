import React from 'react';
import { NavLink } from 'react-router-dom';
import '../StyleComponents/NavBar.css';
import superBread from '../assets/images/super_bread.png';
import mainBread from '../assets/images/bread_title.png';


export const NavBar = () => {
  return (
    <div className="mainnavbar--div">

      <div className="div--iconsnav">
        <img
          className="img--iconsnav"
          src={mainBread}
          alt="icons" />
      </div>
      <li>
        <NavLink className="submainnavbar--div" to='/'>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink className="submainnavbar--div" to='/menu'>
          Menu
        </NavLink>
      </li>
      <li id="lastsubmain--nav">
        <NavLink className="submainnavbar--div" to='/services'>
          Services
        </NavLink>
      </li>
    </div>
  )
};