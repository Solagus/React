import './App.css';
import Navbara from "./componentes/Header/Navbar";
import Body from "./pages/Tienda/Body/Body"
import Footer from "./componentes/Footer/Footer"
import { Route, Routes } from 'react-router';
import ItemDetailContainer from './pages/Tienda/Body/Detail/ItemDetailContainer';
import Home from "./pages/Home/Home"
import Cart from './pages/Tienda/Carrito/Cart';


function App() {
  return (
    <div className="App">
      <Navbara />
      <Routes>
        <Route path="/" element={<Home />} ></Route>
        <Route path="/pages/Tienda/Body/Body" element={<Body />} ></Route>
        <Route path="/pages/Tienda/Body/Detail/ItemDetailContainer/:productId" element={<ItemDetailContainer />} ></Route>
        <Route path="/cart" element={<Cart/>}></Route>
      </Routes>
      <Footer />
    </div>
  );
}


export default App;
