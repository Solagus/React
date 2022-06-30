import { useEffect, useState } from "react"
import Item from "./Item"
import "./ItemList.css"

function ItemList() {
    const [info, setInfo] = useState([])
    useEffect(()=> {
        setTimeout(() => {
            fetch("api.json")
                .then((resp) => resp.json())
                .then((data) => setInfo(data))
        }, 2000)
    }, [])
    return (
        <div className="ItemList">
            {info.map(i => <Item imagen={require(`../imagenes/${i.imagen}`)} nombre={i.nombre} precio={i.precio} stock={i.stock} />)}
        </div>
    )
}

export default ItemList;