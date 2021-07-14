import React, { useEffect, useState, useContext } from "react";
import { ItemCount } from "../ItemlistContainer/ItemCount";
import { Link } from "react-router-dom";
import { useCart } from "../CartContext/CartContext";
import { CartContext } from "../CartContext/CartContext";
export const ItemDetail = ({product}) => {


    const [eventItem, setEventItem] = useState (0);
    const { addItem, SetAddItem} = useContext(CartContext)
   
   
    const onAddItem = (e) => {
        setEventItem(e)
        addItem(product.nombre, product.img, e, product.precio, product.id, product.stock)
        }

    return <div style={{  textAlign:'center', width: 'auto', margin:'1rem', padding:'20px', backgroundColor: '#f5c9f3', border:'5px solid #69c2cf', borderRadius:'10px' }}>

        <h2>{product.nombre}</h2>
        <h4>{`Precio: ${product.precio} ARS`}</h4>
        <img style={{ width: '196px', height: '196px' }} src={product.img} alt={product.name} />
        <h4>{`Stock: ${product.stock} unidades.`}</h4>
        <h6>{product.descr}</h6>
        { eventItem ===0?
           <ItemCount cantidad={product.stock} id={product.id} precio={product.precio} descripcion={product.descr}  value={eventItem} onAdd={onAddItem}  > </ItemCount> : 
           <div >
            <h4>{`¿Confirma que desea agregar al carrito?`}</h4>   
            <Link to="/cart"> <button>Confirmar</button> </Link>
             
           </div>
           }
        
    </div>
    };