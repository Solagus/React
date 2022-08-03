import { getFirestore, collection, addDoc } from "firebase/firestore";
import { useContext } from "react";
import { CartContext } from "../context/cartContext";
import { LoginContext } from "../context/loginContext";

const sendOrder = () => {

    /* const { buyer } = useContext(LoginContext);
    const { cartItem } = useContext(CartContext) */

    const order = {
        "nombre": "Sol",
        "tel" : 1121849423
    };

    const db = getFirestore();
    const ordersCollection = collection(db, "orders")

    const addRef = addDoc(ordersCollection, order)

    return(
        addRef
    )
}

export default sendOrder;