import React from 'react';

import './Header.css';
import {images} from '../../constants'
import { SubHeading } from '../../components';

const Header = () => (
  <div className='app-header section__padding app__wrapper' id='home'>

    <div className="app__wrapper_info">
      <SubHeading title="Chase The New Flavour"/>
      <h1 className='app-header-h1'>THE KEY TO FINE DINING</h1>
      <p className='p__opensans' style={{margin:'2rem 0'}}>Sit Tellus Lobortis Sed Senectus Vivamus Molestie. Condimentum Volutpat Morbi Facilisis Quam Scelerisque Sapien. Et, Penatibus Aliquam Amet Tellus</p>
      <button className="custom__button">Explore Menu</button>
    </div>
    
    <div className="app__wrapper_img">
      <img src={images.welcome} alt="" />

    </div>
  </div>
);

export default Header;
