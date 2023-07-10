import "./register.css"
import React, {useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

function Register(){

    const [studentID, setStudentID] = useState('')

    const [email, setEmail] = useState('')

    const [password, setPassword] = useState('')

    const [errorFlag, setErrorFlag] = useState(false)

    async function submit(e){
        e.preventDefault();
        console.log("button triggered")
        console.log(studentID)
        console.log(password)
        console.log(email)

        try {

            let response = await axios.post("http://localhost:8080/api/v1/auth/register",{
                studentID,password, email
            })
            console.log(response)


        }


        catch (error) {
            console.log(error.response)
            setErrorFlag(true)

        }
    }
    return (
        <div className="login">

            <h1>Register</h1>
            {errorFlag ? <p>Invalid Credentials</p> : null}
            <form action="POST">

                <input type="email" onChange={(e) => {
                    setEmail(e.target.value)
                }} placeholder="Email" name="" id=""/>

                <input type="studentID" onChange={(e) => {
                    setStudentID(e.target.value)
                }} placeholder="Student ID" name="" id=""/>

                <input type="password" onChange={(e) => {
                    setPassword(e.target.value)
                }} placeholder="Password" name="" id=""/>

                <input type = "submit" onClick={submit}/>
            </form>
        </div>
    )
}






export default Register;
