import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button"
import ItemCount from "./ItemCount";
import "./Item.css"
import { Link } from "react-router-dom";

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
                <Link to={`/../../pages/Tienda/Detail/ItemDetailContainer/${props.id}`}><Button>Comprar</Button></Link>
            </Card.Body>
        </Card>
    )

}

export default Item;