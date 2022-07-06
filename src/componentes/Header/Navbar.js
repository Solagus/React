import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import NavLink from "react-bootstrap/NavLink"
import Navbar from "react-bootstrap/Navbar"
import DropdownCarrito from "./Dropdown"
import { Link } from "react-router-dom"
import "./Navbar.css";

function Navbara() {
  return (
    <header>
      <Navbar bg="transparent" variant="light">
        <Container id="navbar">
          <Navbar.Brand id="logo" href="/">Sanishop</Navbar.Brand>
          <Nav id="paginas" className="me-auto">
            <Link to="#home" className="px-2">Inicio</Link>
            <Link to="#features" className="px-2">Nosotros</Link>
            <Link to="#pricing" className="px-2">Diseños</Link>
            <Link to="#pricing" className="px-2">Contacto</Link>
            <Link to="../../pages/Tienda/Body/Body" className="px-2">Tienda</Link>
            <DropdownCarrito className="px-1"/>
          </Nav>
        </Container>
      </Navbar>
    </header>
  )
}
export default Navbara;