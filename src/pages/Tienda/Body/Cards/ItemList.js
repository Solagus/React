
import Item from "./Item"
import "./ItemList.css"

function ItemList(props) {
    
    return (
        <div className="ItemList">
            {(props.info).map(i => <Item imagen={require(`../../../../imagenes/${i.imagen}`)} nombre={i.nombre} precio={i.precio} stock={i.stock} id={i.id} />)}
        </div>
    )
}

export default ItemList;