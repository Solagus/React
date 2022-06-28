import React from "react";
import ItemCount from "./ItemCount"
import "./ItemListContainer.css"

function ItemListContainer(props){
            return (
                <div className="Item">
                    <li>{props.nombre}</li>
                    <span>{props.precio}</span>
                    <br/>
                    <ItemCount stock="6" inicial="1"/>
                    <br/>
                    <button className="Boton">Comprar</button>
                </div>
            )
}


export default ItemListContainer;