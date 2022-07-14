import Col from "react-bootstrap/Col"
import { ListGroup } from "react-bootstrap"
import "./ItemDetail.css"
import Button from "react-bootstrap/Button"
import ItemCount from "../Cards/ItemCount"
import { Link } from "react-router-dom"
import {useState, useContext} from "react"
import Cart from "../../Carrito/Cart"
import {CartContext} from "../../../../context/cartContext"


const ItemDetail = (item) => {

    const [cantItem, setCantItem] = useState(1)
    const [mostrarTerminarCompra, setTerminarCompra] = useState(false)

    const { addItemToCart, isInCart, carrito } = useContext(CartContext)

    const onAddHandler = (count)=>{
        setCantItem(count)
        setTerminarCompra(true)

        addItemToCart(item.item , count)

    }

    

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
                    <ItemCount stock={item.stock} onAdd={onAddHandler}/>
                    <Link to="/cart"><Button className="Boton" onClick={() => < Cart/ >}>Terminar Compra</Button></Link>
                </ListGroup>
            </Col>
        </div>
    )
}

export default ItemDetail