import React from 'react';
import CartWidget from './CartWidget/CartWidget';
import { Link, BrowserRouter, Router } from 'react-router-dom';

export default function NavBar(){
  return (

    <nav>
      

       
        <Link to='/' >Inicio</Link>
        <Link to='/category/hombre'>Zapato de Hombre</Link>
        <Link to='/category/mujer'>Zapato de Mujer</Link>

        <CartWidget/>
    </nav>
    


  );

}






