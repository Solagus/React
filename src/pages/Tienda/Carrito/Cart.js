import "./Cart.css"
import { useContext } from "react"
import { CartProvider } from "../../../context/cartContext";

function Cart() {

    const context = useContext(CartProvider)
    const cartItem = context.cartItem

    return (
         <div className="d-flex justify-content-center">
            {context.cartItem && (
            <div className="DivCarrito">
                <h1>Carrito</h1>
                {cartItem.map((item) => {
                    <div>
                    <p>Nombre: {item.nombre} </p>
                    <p>Cantidad: {item.cantidad}</p>
                    <p>Precio: {item.precio} </p>
                </div>
                })}
                <div>
                    <p>Total: </p>
                </div>
            </div>)}
        </div> 
    )
}

export default Cart;