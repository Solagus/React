import React from "react";
import { useEffect, useState } from "react"
import ItemList from "./ItemList"
import "./ItemListContainer.css"

function ItemListContainer() {
    const [info, setInfo] = useState([])
    useEffect(() => {
        setTimeout(() => {
            fetch("/api.json")
                .then((resp) => resp.json())
                .then((data) => setInfo(data))
        }, 2000)
    }, [])
    return (
        <div >
            <ItemList info={info} />
        </div>
    )
}


export default ItemListContainer;