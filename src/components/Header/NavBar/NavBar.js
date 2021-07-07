import React from 'react';
import CartWidget from './CartWidget/CartWidget';
import { Link, BrowserRouter, Router } from 'react-router-dom';

export default function NavBar(){
  return (

    <nav>
      

       
        <Link to='/' >Inicio</Link>
        <Link to='/category/Hombre'>Zapato de Hombre</Link>
        <Link to='/category/Mujer'>Zapato de Mujer</Link>

        <CartWidget/>
    </nav>
    


  );

}






