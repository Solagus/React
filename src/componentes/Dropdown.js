import Dropdown from "react-bootstrap/Dropdown"
import DropdownToggle from "react-bootstrap/DropdownToggle";
import DropdownMenu from "react-bootstrap/DropdownMenu";
import Button from "react-bootstrap/Button"
import "./Dropdown.css"

function DropdownCarrito() {
    return (
        <Dropdown>
            <DropdownToggle variant="transparent" id="dropdown-basic">
                <img src="../src/imagenes/986-9868123_png-file-icono-carrito-de-compras.png" />
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