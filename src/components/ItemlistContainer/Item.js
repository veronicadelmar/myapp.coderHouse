import React, { useEffect, useState } from "react";
import { ItemCount } from "./ItemCount";
export const Item = ({array}) => {
    
    return <div style={{margin:'1rem', padding:'20px', backgroundColor: '#f5c9f3', border:'5px solid #69c2cf', borderRadius:'10px' }}>

        <h4>{array.nombre}</h4>
        <h4>{`Stock: ${array.stock} unidades.`}</h4>
        <ItemCount cantidad={array.stock}/>
        <button style={{padding:'5px',color:'whitesmoke', fontSize:'1em', width:'8em', backgroundColor: '#1976d2', borderRadius:'10px', border:'none' }}  > Pedir </button>

    </div>
    };