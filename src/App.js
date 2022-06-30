import './App.css';
import Col from "react-bootstrap/Col"
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
          <Col className="col-3"><NavLat /></Col>
          <Col className="col-9">
            <ItemListContainer/>
          </Col>
        </div>
        <Footer />
    </div>
  );
}


export default App;
