import './App.css';
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import Navbara from "./componentes/Navbar";
import NavLat from "./componentes/NavegadorLateral"
import ItemListContainer from "./componentes/ItemListContainer"
import Footer from "./componentes/Footer"
import { render } from '@testing-library/react';

function App() {
  return (
    <div className="App">
        <Navbara />
        <div className="d-flex">
          <Col><NavLat /></Col>
          <Col>
            <Row>
              <ItemListContainer nombre="Vanitory" precio="$13000" />
              <ItemListContainer nombre="Vanitory" precio="$13000" />
              <ItemListContainer nombre="Vanitory" precio="$13000" />
            </Row>
            <Row>
              <ItemListContainer nombre="Vanitory" precio="$13000" />
              <ItemListContainer nombre="Vanitory" precio="$13000" />
              <ItemListContainer nombre="Vanitory" precio="$13000" />
            </Row>
          </Col>
        </div>
        <Footer />
    </div>
  );
}


export default App;
