import "./NavegadorLateral.css";
import Nav from 'react-bootstrap/Nav';

function NavLat() {
    return (
        <Nav className="flex-column navegador-lateral">
            <Nav.Link>Vanitory</Nav.Link>
            <Nav.Link>Asientos de Inodoro</Nav.Link>
            <Nav.Link>Accesorios</Nav.Link>
            <Nav.Link>Griferias</Nav.Link>
        </Nav>
    )
}

export default NavLat;