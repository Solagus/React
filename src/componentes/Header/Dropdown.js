import Dropdown from "react-bootstrap/Dropdown"
import DropdownToggle from "react-bootstrap/DropdownToggle";
import DropdownMenu from "react-bootstrap/DropdownMenu";
import Button from "react-bootstrap/Button"
import Cart from "../../pages/Tienda/Carrito/Cart"
import logo from "../../imagenes/986-9868123_png-file-icono-carrito-de-compras.png"
import "./Dropdown.css"
import { useContext, useState } from "react";
import { CartContext } from "../../context/cartContext";

function DropdownCarrito() {

    const {cartItem} = useContext(CartContext)


    return (
        <Dropdown>
            <DropdownToggle variant="transparent" id="dropdown-basic">
                <img className="ImagenCarrito" src={logo} alt="" />
            </DropdownToggle>
            <DropdownMenu className="dropdownMenu dropdown-menu-lg-end">
                <div className="lista">
                    <p className="texto_del_carrito">Carrito</p>
                    <div>
                        {cartItem.length != 0 ?

                            cartItem.map(data =>

                                <div class="d-flex justify-content-between DivDatos">
                                    <p className="mx-4">{data.nombre}</p>
                                    <p className="mx-4">{data.cantidad}u</p>
                                    <p className="mx-4">${data.cantidad * data.precio}</p>
                                </div>


                            ) : ""}
                    </div>
                    <p>Total: ${cartItem.reduce((acum, elem) => acum + (elem.precio*elem.cantidad), 0)}</p>
                    <Button className="btn btn-dark mt-1" id="finalizarCompra">Finalizar Compra</Button>
                </div>
            </DropdownMenu>
        </Dropdown>
    )
}
export default DropdownCarrito;