import React, { useEffect, useState } from "react";


export const ItemDetail = ({product}) => {
    
    return <div style={{  textAlign:'center', width: 'auto', margin:'1rem', padding:'20px', backgroundColor: '#f5c9f3', border:'5px solid #69c2cf', borderRadius:'10px' }}>

        <h2>{product.nombre}</h2>
        <h4>{`Precio: ${product.precio} ARS`}</h4>
        <img style={{ width: '196px', height: '196px' }} src={product.img} alt={product.name} />
        <h6>{product.descr}</h6>
        
    </div>
    };