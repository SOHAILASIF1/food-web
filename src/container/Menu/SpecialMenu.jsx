import React from 'react';

import './SpecialMenu.css';
import { SubHeading,MenuItem } from '../../components';
import {images,data} from '../../constants'

const SpecialMenu = () => (
  <div className='app-special flex__center section__padding' id='menu'>
    <div className="app-special-title">
      <SubHeading title="Menu that fit you palatte"/>
      <h1 className='headtext__cormorant'>Today Special</h1>

    </div>
    <div className="app-special-menu">
      <div className="app-special-menu-wine flex__center">
        <p className="app-special-menu-heading">Pepsi & CocaCola</p>
        <div className="app_special-menu-item">
          {data.wines.map((wine,index) => (
            <>
            <MenuItem key={wine.title + index} title={wine.title} price={wine.price} tags={wine.tags}/>
            </>
            

          ))}


        </div>
      </div>
      <div className="app-special-img">
        <img src={images.menu} alt="" />

      </div>
      <div className="app-special-menu-coctale flex__center">
        <p className="app-special-menu-heading">Cocktails</p>
        <div className="app_special-menu-item">
          {data.cocktails.map((cocktails,index) => (
            <MenuItem key={cocktails.title + index} title={cocktails.title} price={cocktails.price} tags={cocktails.tags}/>

          ))}


        </div>
      </div>

    </div>
    <div style={{marginTop:'15px'}}>
      <button className='custom__button'>View More</button>

    </div>

    
  </div>
);

export default SpecialMenu;
