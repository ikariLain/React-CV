import React from "react";
import { Link, NavLink } from 'react-router-dom'

import "..assets";

const Navbar = () => {
  return (
    <nav>
      <ul className="submenu" id="submenu">
        <li><NavLink to="/" className="submenu-item">Startsida</NavLink></li>
        <li><NavLink to="/cv" className="submenu-item">CV</NavLink></li>
        <li><NavLink to="/projects" className="submenu-item">Projects</NavLink></li>
        <li><NavLink to="/about" className="submenu-item">About me</NavLink></li>
        <li><NavLink to="/contact" className="submenu-item">Contact</NavLink></li>
      </ul>
    </nav>
  );
};

export default Navbar;