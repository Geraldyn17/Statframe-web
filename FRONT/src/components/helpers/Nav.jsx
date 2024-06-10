import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'
import logo from '../../assets/LOGOPNG.png'
import "./Nav.css"

const NavigationBar = () => {
  return (
    <div className='navBar'>
      <ul className='bar'>
        <li><Link to="/"><img className='imgLogo' src={logo} alt="" /></Link></li>
        <li className='A1'><Link to="/noticias">Noticias</Link></li>
        <li className='A1'><a href="/">Historia</a></li>
      </ul>
        
      
    </div>
  );
};

export default NavigationBar;