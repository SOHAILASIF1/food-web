import React, { useState } from 'react';
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri'
import images from '../../constants/images'

import './Navbar.css';

const Navbar = () =>{
  const [toogleMenu, setToogleMenu]=useState(false);
  return (
  <nav className='app-navbar' >
    <div className="app-navbar-logo">
      <img src={images.gericht} alt="" />
    </div>
    <ul className='app-navbar-links'>
      <li className="p__opensans"><a href="#home">Home</a></li>
      <li className="p__opensans"><a href="#about">About</a></li>
      <li className="p__opensans"><a href="#menu">Menu</a></li>
      <li className="p__opensans"><a href="#awards">Awards</a></li>
      <li className="p__opensans"><a href="#contact">Contact</a></li>


    </ul>
    <div className="app-navbar-login">
      <a href="#login" className='p__opensans'>Login</a>
      <div/>
      <a href="/" className='p__opensans'>Book Table</a>
    </div>
    <div className="app-navbar-menu">
      <RiMenu3Line color='#fff' fontSize={27} onClick={() => setToogleMenu(true)} />
      {toogleMenu &&(
      <div className='app-navbar-menu-overlay flex__center slide__bottom'>
        <RiCloseLine fontSize={27} className='overlay__close' onClick={() => setToogleMenu(false)}/>
      <ul className='app-navbar-menu-links'>
      <li className="p__opensans"><a href="#home">Home</a></li>
      <li className="p__opensans"><a href="#about">About</a></li>
      <li className="p__opensans"><a href="#menu">Menu</a></li>
      <li className="p__opensans"><a href="#awards">Awards</a></li>
      <li className="p__opensans"><a href="#contact">Contact</a></li>


      </ul>

        
      </div>
      )}

      


    </div>
  </nav >
)};

export default Navbar;
