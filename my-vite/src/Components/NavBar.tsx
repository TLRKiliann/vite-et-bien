import React from 'react';
import { NavLink } from 'react-router-dom';
import '../StyleComponents/NavBar.css';

export const NavBar = () => {
  return (
    <div className="mainnavbar--div">
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
      <li>
        <NavLink className="submainnavbar--div" to='/services'>
          Services
        </NavLink>
      </li>
    </div>
  )
};