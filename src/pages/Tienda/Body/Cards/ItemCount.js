import { useState } from "react";
import "./ItemCount.css"
import Button from "react-bootstrap/Button"
import { useContext } from "react"
import { CartContext } from "../../../../context/cartContext"


function ItemCount({stock, onAdd}) {

    const [count, setCount] = useState(1);
    
    const addOne = () => {
        if (count < stock.stock){
            setCount(count + 1)
        }
    }

    const restOne = () => {
        if (count > 1){
            setCount(count - 1)
        }
    }

    const { addItemToCart } = useContext(CartContext)

    return (
        <div>
            <div>
                <Button className="cantidad" onClick={restOne}>-</Button>
                <span>{count}</span>
                <Button className="cantidad" onClick={addOne}>+</Button>
            </div>
            <Button className="Boton" onClick={() => onAdd(stock, count)}>Agregar al Carrito</Button>
        </div>
    )
}



export default ItemCount;


