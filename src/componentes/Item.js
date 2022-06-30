import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button"
import ItemCount from "./ItemCount";
import "./Item.css"


const Item = (props) => {

    return (
        <Card style={{ width: '17rem' }} className="Item">
            <Card.Img variant="top" src={props.imagen} className="img" />
            <Card.Body>
                <Card.Title>{props.nombre}</Card.Title>
                <ItemCount stock={props.stock} />
                <Card.Text>
                    ${props.precio}
                </Card.Text>
                <Button variant="primary">Comprar</Button>
            </Card.Body>
        </Card>
    )

}

export default Item;