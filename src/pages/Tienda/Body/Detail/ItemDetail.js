import Col from "react-bootstrap/Col"
import { ListGroup } from "react-bootstrap"
import "./ItemDetail.css"
import Button from "react-bootstrap/Button"
import "react-bootstrap"
import ItemCount from "../Cards/ItemCount"
import { Link } from "react-router-dom"
import {useState} from "react"
import Cart from "../../Carrito/Cart"


const ItemDetail = (item) => {

    const [cantItem, setCantItem] = useState(item.initial)
    const [mostrarTerminarCompra, setTerminarCompra] = useState(false)

    const onAddHandler = (quantityToAdd)=>{
        setCantItem(quantityToAdd)
        setTerminarCompra(true)
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
                    <Link to="/cart"><Button className="Boton" onClick={()=> {<Cart/>}}>Comprar</Button></Link>
                </ListGroup>
            </Col>
        </div>
    )
}

export default ItemDetail