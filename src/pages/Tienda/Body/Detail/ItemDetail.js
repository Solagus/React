import Col from "react-bootstrap/Col"
import { ListGroup } from "react-bootstrap"
import "./ItemDetail.css"
import Button from "react-bootstrap/Button"
import ItemCount from "../Cards/ItemCount"
import { Link } from "react-router-dom"
import { useContext, useState } from "react"
import { CartContext } from "../../../../context/cartContext"
import Login from "../../Login/Login"
import Cart from "../../Carrito/Cart"




const ItemDetail = ({ item }) => {

    const [cant, setCant] = useState(0)

    const { addItemToCart } = useContext(CartContext)

    const onAdd = (quantity) => {
        console.log(quantity)
        if (cant > 0) {
            setCant(quantity)

            addItemToCart(item, cant)
        }

    }

    return (
        <div className="ItemDetail d-flex">
            <Col className="col-6">
                <img src={item.imagen} alt="" className="img-fluid" />
            </Col>
            <Col className="col-6">
                <ListGroup variant="flush" className="Info my-5">
                    <ListGroup.Item className="Nombre">{item.nombre}</ListGroup.Item>
                    <ListGroup.Item>Color: {item.color}</ListGroup.Item>
                    {item.apto ? <ListGroup.Item>Apto: {item.apto}</ListGroup.Item> : ""}
                    {item.tecnologia ? <ListGroup.Item>Tecnologia: {item.tecnologia}</ListGroup.Item> : ""}
                    {item.caudal ? <ListGroup.Item>Caudal: {item.caudal}</ListGroup.Item> : ""}
                    {item.descripcion ? <ListGroup.Item>Descripcion: {item.descripcion}</ListGroup.Item> : ""}
                    {item.material ? <ListGroup.Item>Material: {item.material}</ListGroup.Item> : ""}
                    {item.herraje ? <ListGroup.Item>Herraje: {item.herraje}</ListGroup.Item> : ""}
                    <ListGroup.Item className="Precio">${item.precio}</ListGroup.Item>
                    <div className="Botones">
                        <ItemCount stock={item} onAdd={addItemToCart}></ItemCount>
                        {<Link to="/login"><Button className="Boton" onClick={() => < Login />}>Terminar Compra</Button></Link>}
                    </div>
                </ListGroup>
            </Col>
        </div>
    )
}

export default ItemDetail