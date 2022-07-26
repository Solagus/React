import { getFirestore, collection, addDoc } from "firebase/firestore";
import { useContext } from "react";
import { CartContext } from "../../../context/cartContext";
import { LoginContext } from "../../../context/loginContext";

const sendOrder = () => {

    const { buyer } = useContext(LoginContext);
    const { cartItem } = useContext(CartContext)

    const order = {
        buyer, 
        cartItem
    };

    const db = getFirestore();
    const ordersCollection = collection(db, "orders")

    const docRef = addDoc(ordersCollection, order).then(({id}) => setOrderId(id))
    return(docRef)
}