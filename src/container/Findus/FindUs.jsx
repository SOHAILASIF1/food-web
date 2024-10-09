import React from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants';

const FindUs = () => (
  <div className='app__bg app__wrapper section__padding'>

    <div className="app__wrapper_info">
      <SubHeading title="Contact"/>
      <h1 className="headtext__cormorant">Find Us</h1>
      <p className="p__opensans">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
      <p className="p__cormorant" style={{color:'#DCCAB7',margin:'2rem 0'}}>Opening Hour</p>
      <p className="p__opensans">Lorem ipsum dolor sit amet.</p>
      <p className="p__opensans">Lorem ipsum dolor sit amet.</p>
      <button className='custom__button' style={{marginTop:'2rem'}}>Contact</button>



    </div>
    
    <div className="app__wrapper_img">
      <img src={images.findus} style={{marginBottom:'3rem'}} alt="" />
    </div>
  </div>
);

export default FindUs;
