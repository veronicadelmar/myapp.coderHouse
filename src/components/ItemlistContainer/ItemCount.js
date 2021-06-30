import React, { useState } from 'react';


export const ItemCount = ({cantidad}) => {

    const [count, setCount ] = useState(0);
    
    const agregarUno = () => {
        setCount(count + 1);
    }
    const quitarUno = () => {
        setCount(count - 1);
      }
    return <>
        <h4>{`Su pedido: ${count} unidad(es).`}</h4>
        { count < cantidad ?(
            <button style={{backgroundColor:'yellow', padding:'10px', borderRadius:'5px', border:'none', margin:'10px' }} onClick={e => agregarUno()}>  +  </button>
        ) : (<h5> Se ha alcanzado el Stock</h5>)}
        { count > 0?(
            <button style={{backgroundColor:'red',border:'none', borderRadius:'5px', padding:'10px', margin:'10px' }} onClick={e => quitarUno()}>  -  </button>
        ) : (<h5>Por favor ingrese un valor a su compra</h5>)}
        
  </>

}