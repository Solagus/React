import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button"
import ItemCount from "./ItemCount";
import "./Item.css"
import ItemDetailContainer from "./ItemDetailContainer";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';

const Item = (props) => {
    const popover = (
        <Popover id="popover-basic">
          <Popover.Body>
            <ItemDetailContainer />
          </Popover.Body>
        </Popover>
      );
    return (
        <Card style={{ width: '17rem' }} className="Item">
            <Card.Img variant="top" src={props.imagen} className="img" />
            <Card.Body>
                <Card.Title>{props.nombre}</Card.Title>
                <ItemCount stock={props.stock} />
                <Card.Text>
                    ${props.precio}
                </Card.Text>
                <OverlayTrigger trigger="click" placement="right" overlay={popover}>
                    <Button>Comprar</Button>
                </OverlayTrigger>
            </Card.Body>
        </Card>
    )

}

export default Item;