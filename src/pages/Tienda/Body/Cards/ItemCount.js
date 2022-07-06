import {useState } from "react";
import "./ItemCount.css"
import Button from "react-bootstrap/Button"



function ItemCount(props) {
    const [count, setCount] = useState(1);
    return (
        <div>
            <Button className="cantidad" onClick={() => {
                if (count>1){
                    setCount(count-1);
                }
            }}>-</Button>
            <span>{count}</span>
            <Button className="cantidad" onClick={() => {
                if (count < props.stock) {
                    setCount(count+1);
                }
            }}>+</Button>
        </div>
    )
}



export default ItemCount;


