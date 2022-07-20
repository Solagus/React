import React from "react";
import { createContext, useEffect, useState } from "react";


const CartContext = React.createContext();

const CartProvider = ({children}) => {
    const [cartItem, setCartItem] = useState([])

    useEffect(() => {
        localStorage.setItem("cartProducts", JSON.stringify(cartItem) )
    }, [cartItem])

    const isInCart = (id) => {
        return cartItem.find((product) => product.id == id) ? true : false
    }

    function addItemToCart(item, count){
        if (isInCart(item.id)){
            const newCart = [...cartItem]
            for (const i of newCart){
                if (i.item.id === item.id){
                    i.cantidad += count;
                }
            }
            setCartItem(newCart)
        }
        else{
            setCartItem([...cartItem, {"item":item, "cantidad": count}])
        }
        console.log(cartItem)
    }

    console.log(cartItem);

    const deleteItemFromCart = (id)=>{
        if (isInCart){
            setCartItem(cartItem.filter((product) => product.id == id))
        }
    }

    const clearCart = () => setCartItem([])

    return(
        <CartContext.Provider value= {{
            cartItem, 
            isInCart,
            addItemToCart, 
            deleteItemFromCart, 
            clearCart}}>
            {children}
        </CartContext.Provider>
    )
}

export { CartContext, CartProvider }