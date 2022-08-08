import { useContext } from 'react';
import { getFirestore, collection, addDoc } from "firebase/firestore";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { LoginContext } from '../../../context/loginContext';
import { CartContext } from "../../../context/cartContext";
import Cart from '../Carrito/Cart';
import "./Login.css"


function Login() {

  const { loginHandler, emailHandler, phoneHandler, nameHandler, name, email, phone } = useContext(LoginContext)

  const buyer = {
    "name": name,
    "phone": phone,
    "email": email
  }

  const { cartItem } = useContext(CartContext)

  const numOrder = Math.floor(Math.random() * 10000)

  const order = {
    "buyer": {
      "name": name,
      "phone": phone,
      "email": email
    },
    "cart": cartItem,
    "date": new Date(),
    "number": numOrder
  };


  return (
    <div className='m-4 Form'>
      <Form className='p-2'>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control className='Input' onChange={emailHandler} value={email} type="email" requiere="requiere" placeholder="Enter Your email" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPhone">
          <Form.Label>Telefono</Form.Label>
          <Form.Control className='Input' onChange={phoneHandler} value={phone} type="tel" required="required" placeholder="Enter Your Phone" required/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Nombre</Form.Label>
          <Form.Control className='Input' onChange={nameHandler} value={name} type="text" placeholder="Enter Your Name" required />
        </Form.Group>

        <Link to="/cart"><Button variant="primary" onSubmit={loginHandler} onClick={() => {
          const db = getFirestore();
          const ordersCollection = collection(db, "orders")
      
          const addRef = addDoc(ordersCollection, order);
          <Cart />
        }}>
          Submit
        </Button></Link>
    </Form>
    </div >
  );
}

export default Login;
