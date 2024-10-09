import React from 'react';

import './Chef.css';
import { images } from '../../constants';
import { SubHeading } from '../../components';

const Chef = () => (
  <div className='app__bg app__wrapper section__padding'>
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Chef Words"/>
      <h1 className="headtext__cormorant heading-edit">What We Belive</h1>
      <div className="app-chef-content">
        <div className="app-chef-content-quote">
          <img src={images.quote} alt="" />
          <p className='p__opensans'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>


        </div>
        <p className='p__opensans'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum reprehenderit fuga culpa, veniam ex iure nam beatae fugit quis nihil consectetur aperiam animi natus eius.</p>
      </div>
      <div className="app-chef-sign">
        <p>Kevin Luo</p>
        <p className='p__opensans'>Founder</p>
        <img src={images.sign} alt="" />
      </div>




    </div>
    
  </div>
);

export default Chef;
