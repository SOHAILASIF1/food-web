import React from 'react';
import {images,data} from '../../constants'
import { SubHeading,MenuItem } from '../../components';

import './Laurels.css';
const AwardCard=({award: {imgUrl,title,subtitle}}) => (
  <div className="app-laurals-award-card">
    <img src={imgUrl} alt="" />
    <div className="app-laurals-award-card-content">
      <p className="p__cormorant" style={{color:'#dccab8'}}>{title}</p>
      <p className="p__cormorant" >{subtitle}</p>


    </div>

  </div>

)

const Laurels = () => (
  <div className='app__bg app__wrapper section__padding' id='awards'>
    <div className="app__wrapper_info">
      <SubHeading title="Awards and Recognation"/>
      <h1 className="headtext__cormorant">Our Laurels</h1>
      <div className="app-laurals-award">
        {data.awards.map((award) => <AwardCard award={award} key={award.title} />)}

      </div>

    </div>
    <div className="app__wrapper_img">
      <img src={images.laurels} alt="" />
    </div>
    
  </div>
);

export default Laurels;
