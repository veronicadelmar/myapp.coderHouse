import React from 'react';
import Logo from './../../imagenes/logo-vg.png';
import NavBar from './NavBar/NavBar';
import './Header.css';

export default function SimpleHeader(){
    return (
        <header>
          <img style={{ height: 'auto', width: '13vh' }} src={Logo} alt="logo" />
          <NavBar />
        </header>
    );
  }





