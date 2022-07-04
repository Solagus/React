import { useState, useEffect } from "react"
import ItemDetail from "./ItemDetail"


const ItemDetailContainer = () => {
    const [detail, setDetail] = useState([])
    useEffect(()=> {
        setTimeout(() => {
            fetch("api.json")
                .then((resp) => resp.json())
                .then((data) => setDetail(data[0]))
        }, 2000)
    }, [])

    return(
        <div>
            <ItemDetail imagen={detail.imagen} nombre={detail.nombre} color={detail.color} apto={detail.apto} tecnologia={detail.tecnologia} caudal={detail.caudal} descripcion={detail.descripcion} precio={detail.precio} ></ItemDetail>
        </div>
    )
}

export default ItemDetailContainer