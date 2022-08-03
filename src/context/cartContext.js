import React from "react";
import { useEffect, useState } from "react";


const CartContext = React.createContext();

const CartProvider = ({ children }) => {
    const [cartItem, setCartItem] = useState([])

    useEffect(() => {
        localStorage.setItem("cartProducts", JSON.stringify(cartItem))
    }, [cartItem])

    const isInCart = (id) => {
        return cartItem.find((product) => product.id === id) ? true : false
    }

    function addItemToCart(item, qty) {
        console.log("llega a context", item);
        console.log(qty);
        isInCart(item.id)
            ?
            setCartItem(cartItem.map((prod) => {
                if (prod.id === item.id) {
                    const copyItem = { ...cartItem };
                    copyItem.qty += item.qty
                    return copyItem
                }
            }))
            :
            console.log("veo cantidad", qty);
        console.log("compruebo item", cartItem);
        setCartItem([...cartItem, { id: item.id, title: item.title, price: item.price, qty: qty }]);
        console.log(cartItem)
    }



    const deleteItemFromCart = (id) => {
        if (isInCart) {
            setCartItem(cartItem.filter((product) => product.id === id))
        }
    }

    const clearCart = () => setCartItem([])

    console.log(cartItem)
    return (
        <CartContext.Provider value={{
            cartItem,
            isInCart,
            addItemToCart,
            deleteItemFromCart,
            clearCart
        }}>
            {children}
        </CartContext.Provider>
    )
}

export { CartContext, CartProvider }