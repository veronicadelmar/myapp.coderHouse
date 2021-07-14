import React, { useContext } from 'react';
import { CartContext, CartProvider, } from "../CartContext/CartContext";
import { useCart } from "../CartContext/CartContext";

export const Cart = () => {
    const cartInfo = useCart()
    const cartItems = cartInfo.cartInfo.items
    return (
        <ul>
            {cartItems.map((mostrar, i) => (
                
                    <li key={i}>{`Item: ${mostrar.item.desc}, cantidad: ${mostrar.quantity}`}</li>
                
            ))

            }
    
        </ul>
        
    )
}