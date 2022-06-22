import "./Footer.css"

function Footer() {
    return (
        <footer>
            <div class="div_telefonos">
                <h1 class="footer__logo">Sanishop</h1>
                <p class="footer__telefono">
                    Telefono: 48230616
                    <br />
                    Celular: 1544111966
                </p>
            </div>
            <div class="div_derechos">
                <a class="footer__instagram" href="https://www.instagram.com/s.s_homedeco/" target="_blank"><img src="../src/imagenes/logo_instagram.png" alt="logo de instagram" /></a>
                <p class="footer__derechos">Derechos Reservados</p>
            </div>
        </footer>
    )
}
export default Footer;