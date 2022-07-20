import React from "react";
import { useEffect, useState } from "react"
import ItemList from "./ItemList"
import "./ItemListContainer.css"
import { getFirestore, doc, getDocs, collection } from "firebase/firestore"

function ItemListContainer() {
    const [info, setInfo] = useState([])

    useEffect(() => {
        const db = getFirestore()

        const productRef = collection(db, "products")

        getDocs(productRef).then((snapshot) => {
            setInfo(snapshot.docs.map((doc) => doc.data()))
        })
    }, [])

    return (
        <div>
            <ItemList info={info} />
        </div>
    )
}


export default ItemListContainer;