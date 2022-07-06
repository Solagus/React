import "./NavegadorLateral.css";
import Nav from 'react-bootstrap/Nav';

function NavLat() {
    return (
        <Nav className="flex-column navegador-lateral">
            <Nav.Link className="my-2">Vanitory</Nav.Link>
            <Nav.Link className="my-2">Asientos de Inodoro</Nav.Link>
            <Nav.Link className="my-2">Accesorios</Nav.Link>
            <Nav.Link className="my-2">Griferias</Nav.Link>
        </Nav>
    )
}

export default NavLat;