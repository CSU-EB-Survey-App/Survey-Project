import "./rating.css"
import axios from "axios"
import React, {useEffect, useState} from "react"
import {useNavigate, Link} from "react-router-dom";
import {FormControl, FormLabel, Box, TextField, Typography, Button} from "@mui/material"

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
        <div className = "Rating">
            <form action = "POST" onSubmit={submit}>
                <Box display ="flex"
                     bgcolor="white"
                     flexDirection = {"column"}
                     maxWidth={400}
                     alignItems="center"
                     justifyContent="center"
                     margin="auto"
                     marginTop={5}
                     padding={3}
                     borderRadius={5}
                     boxShadow={'5px 5px 10px #ccc'}
                     sx={{":hover":{
                             boxShadow:'10px 10px 20px #ccc'
                         }}}>
                    <h2>
                        Create a Rating
                    </h2>
                    <FormControl>
                        <FormLabel>
                            What do you want to rate?
                        </FormLabel>

                        <TextField
                            onChange = {(e) => {setQuestion (e.target.value)}  }

                            type = "question"
                            fullWidth={true}
                            variant = "filled"
                            required={true}>
                        </TextField>

                        <FormLabel>
                            Rating Start Date:
                        </FormLabel>

                        <TextField
                            onChange = {(e) => {setStartDate (e.target.value)}  }
                            type = "date"
                            fullWidth={true}
                            variant = "filled"
                            defaultValue="?"
                            required={true}>
                        </TextField>

                        <FormLabel>
                            Rating end date:
                        </FormLabel>

                        <TextField
                            onChange = {(e) => {setEndDate (e.target.value)}  }
                            type = "date"
                            fullWidth={true}
                            variant = "filled"
                            defaultValue="?"
                            required={true}>
                        </TextField>

                        <Button type = "submit" onClick={submit}>
                            Create Rating
                        </Button>
                    </FormControl>

                </Box>
            </form>
        </div>
    )
}
export default Rating;