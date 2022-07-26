import React from "react";
import { useState } from "react";

const LoginContext = React.createContext();

const LoginProvider = ({ children }) => {
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [buyer, setBuyer] = useState({})

    const nameHandler = (event) => {
        setName(event.target.value)
    }

    const phoneHandler = (event) => {
        setPhone(event.target.value)
    }

    const emailHandler = (event) => {
        setEmail(event.target.value)
    }

    const loginHandler = (event) => {

        event.preventDefault();

        setBuyer({
            "name": name,
            "phone": phone,
            "email": email
        })
    }

    console.log(buyer)

    return (
        <LoginContext.Provider value={{
            name,
            phone,
            email,
            buyer,
            nameHandler,
            phoneHandler,
            emailHandler,
            loginHandler
        }}>
            {children}
        </LoginContext.Provider>
    )
}

export { LoginContext, LoginProvider }