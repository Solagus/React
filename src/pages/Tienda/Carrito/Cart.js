import "./Cart.css"
import { useContext } from "react"
import { CartProvider } from "../../../context/cartContext";

function Cart() {

    const context = useContext(CartProvider)

    return (
        {/* <div className="d-flex justify-content-center">
            {context.carrito && (
            <div className="DivCarrito">
                <h1>Carrito</h1>
                {carrito.map((item) => {
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
        </div> */}
    )
}

export default Cart;