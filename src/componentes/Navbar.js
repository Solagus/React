import "./Navbar.css";

function Navbar(){
    return (
       <header>
         <nav id="navbar">
           <h1 id="logo">Sanishop</h1>
           <ul id="paginas">
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Nosotros</a></li>
            <li><a href="#">Diseños</a></li>
            <li><a href="#">Contacto</a></li>
            <li><a href="#">Tienda</a></li>
           </ul>
         </nav>
       </header>
    )
}
export default Navbar;