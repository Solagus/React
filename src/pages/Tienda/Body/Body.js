import Col from "react-bootstrap/Col"
import NavLat from "./NavegadorLateral"
import ItemListContainer from "./Cards/ItemListContainer"

function Body() {
    return (
        <div className="Body d-flex">
            <Col className="col-3"><NavLat /></Col>
            <Col className="col-9"><ItemListContainer /></Col>
        </div>
    )
}

export default Body;