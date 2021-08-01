import React, { useEffect, useState } from "react";
import { ItemCount } from "./ItemCount";
import './Item.css';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
export const Item = ({array}) => {
    
    return <div className='item'>

        <h4>{array.nombre}</h4>
        <img style={{ textAlign:'center', width: '190px',  }} src={array.img} alt={array.name} />
        <h4>{`Stock: ${array.stock} unidades.`}</h4>

        <Link className='detalle' to={`/item/${array.id}`}> Ver Detalles</Link>
    </div>
    };