import {useState, createContext} from "react";

export const CartContext = createContext({})
const {Provider} = CartContext

export const CartProvider = ({defaultValue=[], children}) => {
    const [carrito, setCarrito] = useState(defaultValue)

    const clearCarrito = () => {
        setCarrito([])
    }

    const isInCart = (prodId) => {
        return carrito.some((item) => item.producto.id === prodId)
    }

    const removeItem = (prodId) => {
        const newCarrito = [...carrito].filter((item) => item.producto.id !== prodId)
        setCarrito(newCarrito)
    }

    const addItemToCart = (producto, cantidad) =>{
        if (isInCart(producto.id)) {
            const newCarrito = [...carrito]
            for (const element of newCarrito) {
                if (element.producto.id === producto.id) {
                    element.cantidad+=cantidad
                }
            }
            setCarrito(newCarrito)
        } else {
            setCarrito(
                [
                    ...carrito,
                    {
                        producto: producto,
                        cantidad: cantidad
                    }
                ]
            )    
        }
    }

    const context = {
        clearCarrito,
        isInCart,
        removeItem,
        addItemToCart,
        carrito
    }

    return(
        <Provider value={context}>
            {children}
        </Provider>
    )
}