import React from 'react';
import Facebook from './../../imagenes/facebook.svg';
import Instagram from './../../imagenes/instagram.svg';
import Whatsapp from './../../imagenes/whatsapp.svg';



export default function LabelBottomNavigation() {
  
  return (

    
    <div style={{display:'flex', justifyContent:'center'}}>

      <h6>copyright Verónica Guiñan</h6>
      
      <a target="_blank"  href='https://www.facebook.com/Verolicious25/'>
        <img style={{with:'50px', height:'50px'}} src={Facebook} alt="facebook"/>
      </a>

      <a target="_blank" href='https://www.instagram.com/veronicadelmar25/'>
        <img style={{with:'50px', height:'50px'}} src={Instagram} alt="facebook"/>
      </a>

      <a target="_blank" href="https://api.whatsapp.com/send?phone=541124002381">
        <img style={{with:'50px', height:'50px'}} src={Whatsapp} alt="facebook"/>
      </a>

    </div>
  );
}
