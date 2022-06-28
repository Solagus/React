import { Component, useState } from "react";
import render from "react-dom"
import "./ItemCount.css"



function ItemCount(props) {
    const [count, setCount] = useState(1);
    return (
        <div>
            <button className="cantidad" onClick={() => {
                if (count>1){
                    setCount(count-1);
                }
            }}>-</button>
            <span>{count}</span>
            <button className="cantidad" onClick={() => {
                if (count < props.stock) {
                    setCount(count+1);
                }
            }}>+</button>
        </div>
    )
}



export default ItemCount;


