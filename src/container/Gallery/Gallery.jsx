import React from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Gallery.css';

const Gallery = () => (
  <div className='app__bg app__wrapper section__padding'>
    <div className="app__wrapper_info">
      <SubHeading title="Instagram"/>
      <h1 className="headtext__cormorant">Photo Gallery</h1>
      <p  className='p__opensans' style={{marginTop:'1rem'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo est ab rem commodi voluptatem eaque corrupti libero, quidem esse iusto, placeat ea nostrum odit, </p>
      <button className='custom__button' style={{marginTop:'0.5rem'}}>Explore</button>
    </div>
    <div className="app__wrapper_img">
      <img src={images.gallery04} alt="" />
      

    </div>
    
  </div>
);

export default Gallery;
