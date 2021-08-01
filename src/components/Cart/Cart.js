import React, { useContext } from 'react';
import { CartContext, CartProvider, } from "../CartContext/CartContext";
import { useCart } from "../CartContext/CartContext";
import { Link } from 'react-router-dom';
import './Cart.css';

export const Cart = ({props}) => {

    const cartInfo = useCart()
    const cartitems = cartInfo.cartInfo.items
    const {removeItems} = useCart()
    

const clearProducts = () => {
    cartInfo.clear()
}

const totalPriceItems= ()=>{
return cartInfo.totalPrice() 
}




    return(
        <> 
        <div className="container-cart">
            
            {cartInfo.cartInfo.items.length === 0? (
            <h1>No hay productos agregados</h1>
         ) : (
            <>
            
            <h1>Carrito de compras</h1>
            <div className="container-contenidoCarrito">
            <div>
            <div className="cart-info">
                <h2>Producto</h2>
                <h2>Artículo</h2>
                <h2>Precio</h2>
                <h2>Cantidad</h2>
                <h2>Subtotal</h2>
            </div>
       
        {cartitems?.map(i => {
            return (
                <>
                {i.quantity === 0? (
                    <h1>No hay productos agregados</h1>
                ): (
                <>
                <div className="container-cardContenido">
                <img src={i.item.img} alt="Imagen artículo"></img>
            <h2> {i.item.desc} </h2> 
            <h3> $ {i.item.price} </h3>
            <h3> {i.quantity} </h3>
            <h2> ${i.item.price * i.quantity} </h2>
            </div>
            <button onClick={()=>removeItems(i.item)}>Borrar producto</button>
            
                </>
                )}
                </>
            )
  })} 
     
     <div className="total-price">
     <h2><span> Total $ </span>{totalPriceItems()} </h2>
     </div>
     

     <div>
        <Link to= "/"><button>Continuar comprando</button></Link>
         <button    onClick={clearProducts}>Vaciar carrito </button>
     </div>
     
     </div>
     
     
     <div> 
         
         <h1>Resumen de compra</h1>
         <div>
         <h3>Subtotal</h3> 
         <p>$ {totalPriceItems()}</p>
         </div>
         <div>
         <h3>Envío (retiro por sucursal)</h3>
         <p>$ 0.00</p>
         </div>
         <div>
         <h3>Total del pedido</h3>
         <p>$ {totalPriceItems()}</p>
         </div>
         <Link to="/cart/finalizarCompra">
         <button>Realizar pedido</button>
         </Link>
         
         
     </div>
     </div>
     </>
) }

     </div>
     </>
 )
}