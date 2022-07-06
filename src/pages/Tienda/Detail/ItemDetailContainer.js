import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "./ItemDetail"

const ItemDetailContainer = () => {

    const params = useParams()

    const [detail, setDetail] = useState([])
    useEffect(() => {
        fetch("/api.json")
            .then((resp) => resp.json())
            .then((data) => setDetail(data.find((product) => product.id === parseInt(params.productId))))
    }, [])
    console.log(detail)

    return (
        <div>
            <ItemDetail imagen={require(`../../../imagenes/${detail.imagen}`)} nombre={detail.nombre} color={detail.color} apto={detail.apto} tecnologia={detail.tecnologia} caudal={detail.caudal} descripcion={detail.descripcion} precio={detail.precio} ></ItemDetail>
        </div>
    )
}

export default ItemDetailContainer