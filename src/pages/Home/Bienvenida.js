import "./Bienvenida.css"
import 'animate.css';

function Bienvenida() {
    return (
        <section className="inicio">
            <div className="wow animate__animated animate__zoomIn inicio__titulo">
                <div>
                    <h2 className=" inicio__titulo">
                        Especialistas en buscar el mejor diseño y confort para tu hogar.
                    </h2>
                </div>
                <br />
                <br />
                <p className="inicio__parrafo">
                    Todo mueble que necesites para tu hogar lo vas a encontrar con nosotros. Vanitorys para el baño, amoblamientos de cocina, vestidores y armarios. Eso y mucho mas tenemos en Sanishop.
                    <br/>
                    Contactate con nosotros por cualquier duda que tengas!
                </p>
            </div>
        </section>
    )
}

export default Bienvenida;