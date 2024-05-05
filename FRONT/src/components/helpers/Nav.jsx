import React from 'react';
import axios from 'axios'
import logo from '../../assets/LOGOPNG.png'
import "./Nav.css"

const NavigationBar = () => {
  return (
    <div>
      <ul className='bar'>
        <li><img src={logo} alt="" /></li>
        <li className='A1'><a href="/">Noticias</a></li>
        <li className='A1'><a href="/">Historia</a></li>
      </ul>
        
      
    </div>
  );
};

export default NavigationBar;