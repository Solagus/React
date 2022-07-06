import "./Iconos.css"
import 'animate.css';
import bano from "../../iconos/bano.png"
import cocina from "../../iconos/cocina.png"
import armario from "../../iconos/armario.png"


function Iconos() {
    return (
        <div className="iconos wow animate__animated animate__bounce">
            <div className="iconos__bano">
                <img src={bano} alt="icono de baño"/>
            </div>
            <div className="iconos__cocina">
                <img src={cocina} alt="icono de cocina"/>
            </div>
            <div className="iconos__armario">
                <img src={armario} alt="icono de armario"/>
            </div>
        </div>
    )
}

export default Iconos;