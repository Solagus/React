import "./Cart.css"
import { useContext } from "react"
import Button from "react-bootstrap/Button"
import { CartContext } from "../../../context/cartContext";
import Login from "../Login/Login"
import { LoginContext } from "../../../context/loginContext";

function Cart() {

    const { cartItem } = useContext(CartContext)
    const { deleteItemFromCart } = useContext(CartContext)
    const { clearCart } = useContext(CartContext)

    const exists = () => {
        if (cartItem != []) {
            return true
        } else {
            return false
        }
    }

    const { buyer } = useContext(LoginContext)


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
                    })
                 
                : <p>No hay productos en el carrito</p>}
            </div>
            <div className="DivFinalizar">
                <div >
                    <p>{buyer.name}</p>
                    <p>{buyer.phone}</p>
                    <p>{buyer.email}</p>
                    <p>Total: </p>
                    <Button variant="danger">Vaciar Carrito</Button>
                    <Button variant="success" className="Button" onClick={clearCart} >Terminar compra</Button>
                </div>
            </div>
        </div>
    )
}

export default Cart;