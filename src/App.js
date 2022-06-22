import './App.css';
import Col from "react-bootstrap/Col"
import Navbara from "./componentes/Navbar";
import NavLat from "./componentes/NavegadorLateral"
import Cards from "./componentes/Cards"
import Footer from "./componentes/Footer"

function App() {
  return (
    <div className="App">
      <body>
        <Navbara />
        <div className="d-flex">
          <Col><NavLat/></Col>
          <Col>
            <Col className="d-flex">
              <Cards/>
              <Cards/>
              <Cards/>
            </Col>
            <Col className="d-flex">
              <Cards/>
              <Cards/>
              <Cards/>
            </Col>
          </Col>
        </div>
        <Footer/>
      </body>
    </div>
  );
}

export default App;
