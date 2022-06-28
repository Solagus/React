import "./Footer.css"
import instagram from "../imagenes/logo_instagram.png"

function Footer() {
    return (
        <footer>
            <div className="div_telefonos">
                <h1 className="footer__logo">Sanishop</h1>
                <p className="footer__telefono">
                    Telefono: 48230616
                    <br />
                    Celular: 1544111966
                </p>
            </div>
            <div className="div_derechos">
                <a className="footer__instagram" href="https://www.instagram.com/s.s_homedeco/" target="_blank"><img src={instagram} alt="logo de instagram" /></a>
                <p className="footer__derechos">Derechos Reservados</p>
            </div>
        </footer>
    )
}
export default Footer;