import { Component, useState } from "react";
import render from "react-dom"
import "./ItemCount.css"



function ItemCount(inicial, stock) {
    
    return (
        <div>
            <button className="cantidad" onClick={() => {
                if (inicial <= stock){
                    inicial += 1;
                }
            }}>-</button>
            <span>{inicial}</span>
            <button className="cantidad" onClick={() => {
                if (inicial > 1) {
                    inicial -= 1;
                }
            }}>+</button>
        </div>
    )
}



export default ItemCount;


