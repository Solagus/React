import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import NavLink from "react-bootstrap/NavLink"
import Navbar from "react-bootstrap/Navbar"
import DropdownCarrito from "./Dropdown"
import "./Navbar.css";

function Navbara() {
  return (
    <header>
      <Navbar bg="transparent" variant="light">
        <Container id="navbar">
          <Navbar.Brand id="logo" href="#home">Sanishop</Navbar.Brand>
          <Nav id="paginas" className="me-auto">
            <NavLink href="#home">Inicio</NavLink>
            <NavLink href="#features">Nosotros</NavLink>
            <NavLink href="#pricing">Diseños</NavLink>
            <NavLink href="#pricing">Contacto</NavLink>
            <NavLink href="#pricing">Tienda</NavLink>
            <DropdownCarrito/>
          </Nav>
        </Container>
      </Navbar>
    </header>
  )
}
export default Navbara;