import "./Cart.css"
import { useContext, useState } from "react"
import Button from "react-bootstrap/Button";
import { CartContext } from "../../../context/cartContext";
import Login from "../Login/Login"
import { LoginContext } from "../../../context/loginContext";

function Cart(item) {

    const { cartItem } = useContext(CartContext)

    const { deleteItemFromCart } = useContext(CartContext)

    const { clearCart } = useContext(CartContext)

    console.log(cartItem)

    const { name, email, phone } = useContext(LoginContext)


    return (

        <div className="d-flex justify-content-center carrito">

            <div className="DivCarrito">

                <h1>Carrito</h1>

                {cartItem.length != 0 ?

                    cartItem.map(data =>

                        <div className="d-flex justify-content-evenly DivDatos">
                            <p>{data.nombre}</p>
                            <p>{data.cantidad}u</p>
                            <p>${data.cantidad * data.precio}</p>
                            <Button variant="danger" onClick={deleteItemFromCart}>Eliminar</Button>
                        </div>


                    )

                    : <p>No hay productos en el carrito</p>}

            </div>

            <div className="DivFinalizar">

                <div>

                    <div className="d-flex flex-column justify-content-between align-items-start">
                        <p className="mx-2">Nombre: {name}</p>

                        <p className="mx-2">Telefono: {phone}</p>

                        <p className="mx-2">Email: {email}</p>
                    </div>

                    <p>Total: ${cartItem.reduce((acum, elem) => acum + (elem.precio * elem.cantidad), 0)}</p>

                    <Button variant="danger" onClick={clearCart}>Vaciar Carrito</Button>

                    <Button variant="success" className="Button my-2" onClick={clearCart}>Terminar compra</Button>

                </div>

            </div>

        </div>

    )

}

export default Cart;