import "./Cart.css"
import { useContext } from "react"
import Button from "react-bootstrap/Button"
import { CartContext } from "../../../context/cartContext";

function Cart() {

    const { cartItem } = useContext(CartContext)
    const { deleteItemFromCart } = useContext(CartContext)

    const exists = () => {
        if (cartItem != []){
            return true
        }else{
            return false
        }
    }

    console.log(cartItem)

    return (
        <div className="d-flex justify-content-center carrito">
            <div className="DivCarrito">
                <h1>Carrito</h1>
                {exists == true 
                ? cartItem.map((item) => {
                    <div>
                        <p>Articulo: {item.nombre} </p>
                        <p>Cantidad: {item.cantidad} </p>
                        <p>Precio: {item.precio * item.cantidad} </p>
                        <Button variant="danger" onClick={deleteItemFromCart(item)}>Eliminar</Button>
                    </div>
                }) &&
                <div className="DivFinalizar">
                    <p>Total: </p>
                    <Button variant="danger" className="Button">Terminar compra</Button>
                </div> 
                : <p>No hay productos en el carrito</p>}
            </div>
        </div>
    )
}

export default Cart;