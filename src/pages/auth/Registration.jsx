import { useState } from "react"
import  Form  from "./../../components/login/Form";
import {  handleRegistrationSubmit } from "../../api/ApiMethods";

function Registration () {

    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")

    const [name, setName] = useState("")
    const [username, setUsername] = useState("")

    const handleSubmit = async () => {

        try {
            const response = await handleRegistrationSubmit(name, username, email, password)
            console.log("FUE SUCCESS: ", response)
        } catch (error) {
            console.log(error)
        }

    }


    return (
        <>
        <Form handleSubmit={handleSubmit} setEmail={setEmail} setPassword= {setPassword} setName={setName} setUsername={setUsername}/>
        </>
    )
    
    }
    
    export default Registration