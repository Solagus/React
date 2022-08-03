import "./Cart.css"
import { useContext } from "react"
import Button from "react-bootstrap/Button"
import { CartContext } from "../../../context/cartContext";
import Login from "../Login/Login"
import { LoginContext } from "../../../context/loginContext";

function Cart(item) {

    const { cartItem } = useContext(CartContext)
    const { deleteItemFromCart } = useContext(CartContext)
    const { clearCart } = useContext(CartContext)

    console.log(cartItem)


    const { buyer } = useContext(LoginContext)


    return (
        <div className="d-flex justify-content-center carrito">
            <div className="DivCarrito">
                <h1>Carrito</h1>
                {cartItem.length != 0 ? 
                    
                   (<div>
                        <p>Articulo: {item.nombre} </p>
                        <p>Cantidad: {item.cantidad} </p>
                        <p>Precio: {item.precio * item.cantidad} </p>
                        <Button variant="danger" onClick={deleteItemFromCart(item)}>Eliminar</Button>
                    </div>)
                 : <p>No hay productos en el carrito</p>}
            </div>
            <div className="DivFinalizar">
                <div >
                    <p>{buyer.name}</p>
                    <p>{buyer.phone}</p>
                    <p>{buyer.email}</p>
                    <p>Total: </p>
                    <Button variant="danger" onClick={clearCart}>Vaciar Carrito</Button>
                    <Button variant="success" className="Button" >Terminar compra</Button>
                </div>
            </div>
        </div>
    )
}

export default Cart;