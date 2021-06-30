import React from 'react';
import FotoDePerfil from './../../imagenes/uniswap-uni-logo.png';
import NavBar from './NavBar/NavBar';

export default function SimpleHeader(){
    return (
        <header style={{padding:'1rem', display:'flex', justifyContent: 'space-between', marginBottom:'5rem', borderBottom:'5px solid red' }} >
          <img style={{ height: 'auto', width: '13vh' }} src={FotoDePerfil} alt="logo" />
          <NavBar />
        </header>
    );
  }





