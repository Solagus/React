import React from "react";
import { createContext, useEffect, useState } from "react";


export const CartContext = React.createContext();

export const CartProvider = ({children}) => {
    const [cartItem, setCartItem] = useState([])

    useEffect(() => {
        localStorage.setItem("cartProducts", JSON.stringify(cartItem) )
    }, [cartItem])

    const isInCart = (id) => {
        return cartItem.find((product) => product.id == id) ? true : false
    }

    function addItemToCart(item, count){
        const newCart = cartItem.filter((product) => product.id !== item.id)
        newCart.push({...item, cantidad: count})
        setCartItem(newCart)
        console.log(cartItem)
    }

    const deleteItemToCart = (id)=>{
        setCartItem(cartItem.filter((product) => product.id == id))
    }

    const clearCart = () => setCartItem([])

    return(
        <CartContext.Provider value= {{
            cartItem, 
            isInCart,
            addItemToCart, 
            deleteItemToCart, 
            clearCart}}>
            {children}
        </CartContext.Provider>
    )
}