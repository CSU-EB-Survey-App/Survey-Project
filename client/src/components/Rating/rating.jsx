import "./rating.css"
import axios from "axios"
import React, {useEffect, useState} from "react"
import {useNavigate, Link} from "react-router-dom";


function Rating() {

    const [user,setUser]=useState('')

    const [question, setQuestion] =useState('')

    const [startDate, setStartDate] =useState('')

    const [endDate, setEndDate] =useState('')

    const [errorFlag, setErrorFlag] =useState(false)

    async function submit(e){
        e.preventDefault();
        console.log("button triggered")
        console.log(user)
        console.log(question)
        console.log(startDate)
        console.log(endDate)
        try {

            let response = await axios.post("http://localhost:8080/api/v1/rating",{
                user,question, startDate, endDate
            })
            console.log(response)

        }


        catch (error) {
            console.log(error.response)
            setErrorFlag(true)

        }
    }
    return (
        <div className="Rating">

            <h1>Create a Rating</h1>
            <form action="POST">
                <input type="question" onChange={(e) => {
                    setUser(e.target.value)
                }} placeholder="Question" name="" id=""/>

                <input type="startDate" onChange={(e) => {
                    setStartDate(e.target.value)
                }} placeholder="Start Date: (MM/DD/YYYY)" name="" id=""/>

                <input type="endDate" onChange={(e) => {
                    setEndDate(e.target.value)
                }} placeholder="End Date: (MM/DD/YYYY)" name="" id=""/>

                <input type = "submit" onClick={submit}/>

            </form>


        </div>
    )

}











export default Rating;