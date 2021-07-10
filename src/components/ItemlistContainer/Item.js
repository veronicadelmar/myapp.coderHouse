import React, { useEffect, useState } from "react";
import { ItemCount } from "./ItemCount";
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
export const Item = ({array}) => {
    
    return <div style={{margin:'1rem', padding:'20px', backgroundColor: '#f5c9f3', border:'5px solid #69c2cf', borderRadius:'10px' }}>

        <h4>{array.nombre}</h4>
        <img style={{ width: '196px', height: '196px' }} src={array.img} alt={array.name} />
        <h4>{`Stock: ${array.stock} unidades.`}</h4>
        <Link to={`/item/${array.id}`}> Ver Detalles</Link>
    </div>
    };