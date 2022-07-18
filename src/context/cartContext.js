import React from "react";
import { createContext, useEffect, useState } from "react";


export const CartContext = React.createContext();

export const CartProvider = ({children}) => {
    const [cartItem, setCartItem] = useState(() => {
        try {
            const productosInLocalStorage = localStorage.getItem("cartProducts")
            console.log(cartItem)
        }catch(error) {
            return []
        }
    })

    useEffect(() => {
        localStorage.setItem("cartProducts", JSON.stringify(cartItem) )
    }, [cartItem])

    function addItemToCart(product){
        const inCart = cartItem.find((productInCart) => productInCart.id == product.id)

        if (inCart){
            setCartItem(
                cartItem.map((productInCart)=> {
                    if (productInCart.id === product.id){
                        return {...inCart, amount: inCart.amount + 1}
                    }else{
                        return productInCart;
                    }
                })
            )
        }else{
            setCartItem([...cartItem, {...product, amount: 1}])
        }
    }

    const deleteItemToCart = (product)=>{
        const inCart = cartItem.find((productInCart) => productInCart.id == product.id)

        if (inCart.amount === 1){
            setCartItem(
                cartItem.filter((productInCart) => (productInCart.id !== product.id)
                )
            )
        }else{
            setCartItem((productInCart) => {
                if (productInCart.id === product.id){
                    return {...inCart, amount: inCart.amount - 1}
                } else {
                    return productInCart
                }
            }
                
            )
        }
    }

    const clearCart = () => setCartItem([])

    return(
        <CartContext.Provider value= {cartItem, addItemToCart, deleteItemToCart, clearCart}>
            {children}
        </CartContext.Provider>
    )
}