import Col from "react-bootstrap/Col"
import { ListGroup } from "react-bootstrap"
import "./ItemDetail.css"
import Button from "react-bootstrap/Button"
import ItemCount from "../Cards/ItemCount"
import { Link } from "react-router-dom"
import { useContext } from "react"
import Cart from "../../Carrito/Cart"
import { CartContext } from "../../../../context/cartContext"



const ItemDetail = (item) => {

    const { addItemToCart } = useContext(CartContext)
    
    return (
        <div className="ItemDetail d-flex">
            <Col className="col-6">
                <img src={item.imagen} alt="" />
            </Col>
            <Col className="col-6">
                <ListGroup variant="flush" className="Info">
                    <ListGroup.Item className="Nombre">{item.nombre}</ListGroup.Item>
                    <ListGroup.Item>Color: {item.color}</ListGroup.Item>
                    <ListGroup.Item>Apto: {item.apto}</ListGroup.Item>
                    <ListGroup.Item>Tecnologia: {item.tecnologia}</ListGroup.Item>
                    <ListGroup.Item>Caudal: {item.caudal}</ListGroup.Item>
                    <ListGroup.Item>Descripcion: {item.descripcion}</ListGroup.Item>
                    <ListGroup.Item className="Precio">${item.precio}</ListGroup.Item>
                    <ItemCount stock={item.stock}/>
                    <Button className="Boton" onClick={() => addItemToCart(item)}>Agregar al Carrito</Button>
                    <Link to="/cart"><Button className="Boton" onClick={() => < Cart/ >}>Terminar Compra</Button></Link>
                </ListGroup>
            </Col>
        </div>
    )
}

export default ItemDetail