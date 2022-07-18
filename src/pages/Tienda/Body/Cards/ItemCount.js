import { useState } from "react";
import "./ItemCount.css"
import Button from "react-bootstrap/Button"




function ItemCount(props) {
    const [count, setCount] = useState(1);
    
    const addOne = () => {
        if (count < props.stock){
            setCount(count + 1)
        }
    }

    const restOne = () => {
        if (count > 1){
            setCount(count - 1)
        }
    }
    return (
        <div>
            <div>
                <Button className="cantidad" onClick={restOne}>-</Button>
                <span>{count}</span>
                <Button className="cantidad" onClick={addOne}>+</Button>
            </div>
        </div>
    )
}



export default ItemCount;


