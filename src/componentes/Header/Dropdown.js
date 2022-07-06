import Dropdown from "react-bootstrap/Dropdown"
import DropdownToggle from "react-bootstrap/DropdownToggle";
import DropdownMenu from "react-bootstrap/DropdownMenu";
import Button from "react-bootstrap/Button"
import logo from "../../imagenes/986-9868123_png-file-icono-carrito-de-compras.png"
import "./Dropdown.css"

function DropdownCarrito() {
    return (
        <Dropdown>
            <DropdownToggle variant="transparent" id="dropdown-basic">
                <img className="ImagenCarrito" src={logo} alt="" />
            </DropdownToggle>
            <DropdownMenu className="dropdownMenu dropdown-menu-lg-end">
                <div className="lista">
                    <p className="texto_del_carrito">Carrito</p>
                    <Button className="btn btn-dark mt-1" id="finalizarCompra">Finalizar Compra</Button>
                </div>
            </DropdownMenu>
        </Dropdown>
    )
}
export default DropdownCarrito;