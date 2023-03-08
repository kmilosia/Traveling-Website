import React from 'react';
import './selects.css';
import beach1 from '../../assets/beach1.jpg';
import beach2 from '../../assets/beach2.jpg';
import beach3 from '../../assets/beach3.jpg';
import beach4 from '../../assets/beach4.jpg';
import beach5 from '../../assets/beach5.jpg';
import beach6 from '../../assets/beach6.jpg';
import beach7 from '../../assets/beach7.jpg';
import beach8 from '../../assets/beach8.jpg';
import SelectsImages from '../selectsImages/SelectsImages';


function Selects() {
  return (
    <div className='selects'>
        <div className="container">
      <SelectsImages imageSrc={beach1} text="Bora Bora"/>
      <SelectsImages imageSrc={beach2} text="Maldives"/>
      <SelectsImages imageSrc={beach3} text="Key West"/>
      <SelectsImages imageSrc={beach4} text="Emerald Bay"/>
      <SelectsImages imageSrc={beach5} text="Grenada"/>
      <SelectsImages imageSrc={beach6} text="Barbados"/>
      </div>
    </div>
  )
}

export default Selects;
