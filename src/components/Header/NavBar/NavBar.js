import React from 'react';
import CartWidget from './CartWidget/CartWidget';
import { Link } from 'react-router-dom';
import './NavBar.css';

export default function NavBar(){
  return (

    <nav>
      

       
        <Link to='/' >
          <button>Inicio</button>
        </Link>

        <Link to='/category/celulares'>
        <button>Celulares</button>
        </Link>

        <Link to='/category/computadoras'>
        <button>Notebooks</button>
        </Link>

        <CartWidget/>
    </nav>
    


  );

}






