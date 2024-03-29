import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "./ItemDetail"
import { getFirestore, collection, doc, getDoc } from 'firebase/firestore'

const ItemDetailContainer = () => {

    const params = useParams()

    const [detail, setDetail] = useState([])

    /* useEffect(() => {
        const db = getFirestore()

        const collectionRef = collection(db, "products")

        getDocs(collectionRef).then((snapshot) => {
            const productRef = snapshot.docs.map((doc) => doc.data().id === parseInt(params.productId) && doc.data()) 
            setDetail(productRef)
        })
    }, []) */
    useEffect(() => {
        const db = getFirestore()
        const miproducto = doc(db, 'products', params.productId)
        getDoc(miproducto)
            .then((prod) => {
                setDetail({ id: prod.id, ...prod.data() });

            })}, [params.productId])
                


            return (
                <div>
                    <ItemDetail item ={detail}></ItemDetail>
                </div>
            )
            }

export default ItemDetailContainer