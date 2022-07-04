import Col from "react-bootstrap/Col"
import { ListGroup } from "react-bootstrap"
import "./ItemDetail.css"


const ItemDetail = (item) => {
    return (
        <div className="ItemDetail">
            <Col>
                <img src={item.imagen} />
            </Col>
            <Col>
                <ListGroup variant="flush">
                    <ListGroup.Item>{item.nombre}</ListGroup.Item>
                    <ListGroup.Item>Color: {item.color}</ListGroup.Item>
                    <ListGroup.Item>Apto: {item.apto}</ListGroup.Item>
                    <ListGroup.Item>Tecnologia: {item.tecnologia}</ListGroup.Item>
                    <ListGroup.Item>Caudal: {item.caudal}</ListGroup.Item>
                    <ListGroup.Item>Descripcion: {item.descripcion}</ListGroup.Item>
                    <ListGroup.Item>${item.precio}</ListGroup.Item>
                </ListGroup>
            </Col>
        </div>
    )
}

export default ItemDetail