import "./Cards.css"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import item from "./api.json"

function Cards(item) {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="{item.imagen}" />
            <Card.Body>
                <Card.Title>{item.nombre}</Card.Title>
                <Card.Text>{item.precio}</Card.Text>
                <Button variant="primary">Comprar</Button>
            </Card.Body>
        </Card>
    )
}

export default Cards;