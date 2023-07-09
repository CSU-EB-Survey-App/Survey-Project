import "./login.css"
import axios from "axios"
import React, {useEffect, useState} from "react"
import {useNavigate, Link} from "react-router-dom";


function Login() {

    const [studentID,setStudentID]=useState('')

    const [password, setPassword] =useState('')

    const [errorFlag, setErrorFlag] =useState(false)

    async function submit(e){
        e.preventDefault();
        console.log("button triggered")
        console.log(studentID)
        console.log(password)
        try {

            let response = await axios.post("http://localhost:8080/api/v1/auth/login",{
                studentID,password
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

            <h1>Login</h1>
            {errorFlag ? <p>Invalid Credentials</p> : null}
            <form action="POST">
                <input type="studentID" onChange={(e) => {
                    setStudentID(e.target.value)
                }} placeholder="Student ID" name="" id=""/>

                <input type="password" onChange={(e) => {
                    setPassword(e.target.value)
                }} placeholder="Password" name="" id=""/>

                <input type = "submit" onClick={submit}/>


            </form>

            <br />
            <p>Or</p>

            <br />

            <Link to="/register">No Account? Register Here</Link>


        </div>
    )

}











export default Login;