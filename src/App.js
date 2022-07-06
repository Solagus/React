import './App.css';
import Navbara from "./componentes/Header/Navbar";
import Body from "./pages/Tienda/Body/Body"
import Footer from "./componentes/Footer/Footer"
import { Route, Routes } from 'react-router';
import ItemDetailContainer from './pages/Tienda/Detail/ItemDetailContainer';
import Home from "./pages/Home/Home"


function App() {
  return (
    <div className="App">
      <Navbara />
      <Routes>
        <Route path="/" element={<Home />} ></Route>
        <Route path="/pages/Tienda/Body/Body" element={<Body />} ></Route>
        <Route path="/pages/Tienda/Detail/ItemDetailContainer/:productId" element={<ItemDetailContainer />} ></Route>
      </Routes>
      <Footer />
    </div>
  );
}


export default App;
