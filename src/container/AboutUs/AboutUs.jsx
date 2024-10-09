import React from 'react';

import './AboutUs.css';
import {images} from '../../constants'

const AboutUs = () => (
  <div className='app-aboutus app__bg flex__center section__padding' id='about'>
    <div className="app-aboutus-overlay flex__center">
      <img src={images.G} alt="" />
    </div>
    <div className="app-aboutus-content flex__center">
      <div className="app-aboutus-content-about">
        <h1 className='headtext__cormorant'>About Us</h1>
        <img src={images.spoon} alt="" className='spoon__img' />
        <p className='p__opensans'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta culpa dicta et, quisquam fugit error veritatis maiores expedita, corporis quam, deleniti nam exercitationem adipisci esse architecto? Fugiat itaque esse ipsum.</p>
        <button className='custom__button'>Explore</button>
      </div>

      <div className="app-aboutus-content-knife flex__center">
        <img src={images.knife} alt="" className='' />
      </div>
      <div className="app-aboutus-content-history">
        <h1 className='headtext__cormorant'>Our History </h1>
        <img src={images.spoon} alt="" className='spoon__img' />
        <p className='p__opensans'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta culpa dicta et, quisquam fugit error veritatis maiores expedita, corporis quam, deleniti nam exercitationem adipisci esse architecto? Fugiat itaque esse ipsum.</p>
        <button className='custom__button'>Explore</button>
      </div>

    </div>
    
  </div>
);

export default AboutUs;
