import React, { useState } from 'react';

export const ItemCount = ({cantidad, id, precio, descripcion, value,  onAdd}) => {

    const [quantity, setQuantity ] = useState(0);
    const [stockRequired, setStockRequired] = useState(quantity)
    const onAddCount = (value) => {
        if ((cantidad >= stockRequired + value ) && ((stockRequired + value) >=0) ) {
        setStockRequired(stockRequired + value)
       } else{
   
       }
    }
    const handleClick = () => {
        console.log(quantity)
        onAdd(quantity)
    }
    const agregarUno = () => {
        setQuantity (quantity + 1);
    }
    const quitarUno = () => {
        setQuantity (quantity - 1);
      }

    return <>
        <h4>{`Su pedido: ${quantity} unidad(es).`}</h4>
        { quantity < cantidad ?(
            <button style={{backgroundColor:'yellow', padding:'10px', borderRadius:'5px', border:'none', margin:'10px' }} onClick={e => agregarUno()}>  +  </button>
        ) : (<h5> Se ha alcanzado el Stock</h5>)}
        { quantity > 0?(
            <button style={{backgroundColor:'red',border:'none', borderRadius:'5px', padding:'10px', margin:'10px' }} onClick={e => quitarUno()}>  -  </button>
        ) : (<h5>Por favor ingrese un valor a su compra</h5>)}
        <button onClick={handleClick} value={quantity}>Agregar al carrito</button> 
        
  </>

}