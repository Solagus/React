import { useState } from "react";
import "./ItemCount.css"
import Button from "react-bootstrap/Button"
import { Link } from "react-router-dom"



function ItemCount(props, onAdd) {
    const [count, setCount] = useState(1);
    return (
        <div>
            <div>
                <Button className="cantidad" onClick={() => {
                    if (count > 1) {
                        setCount(count - 1);
                    }
                }}>-</Button>
                <span>{count}</span>
                <Button className="cantidad" onClick={() => {
                    if (count < props.stock) {
                        setCount(count + 1);
                    }
                }}>+</Button>
            </div>
            <div>
                <Link to={`/../../pages/Tienda/Body/Detail/ItemDetailContainer/${props.id}`}><Button onClick={()=> onAdd(count)}>Detalles</Button></Link>
            </div>
        </div>
    )
}



export default ItemCount;


