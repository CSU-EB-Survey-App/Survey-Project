import axios from "axios"
import React, {useEffect, useState} from "react"
import {useNavigate, Link} from "react-router-dom";
import {Radio, RadioGroup, FormControlLabel, Box, TextField, Typography, Button, FormControl, FormLabel} from "@mui/material"
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import ThumbDownAltOutlinedIcon from '@mui/icons-material/ThumbDownAltOutlined';
import IconButton from "@mui/material/IconButton";

function DisplayPoll() {
    const [user,setUser]=useState('')
    const [question, setQuestion] =useState('')
    const [answer1, setAns1] =useState('')
    const [answer2, setAns2] =useState('')
    const [answer3, setAns3] =useState('')
    const [startDate, setStartDate] =useState('')
    const [endDate, setEndDate] =useState('')
    const [errorFlag, setErrorFlag] =useState(false)
    const [helpful,setHelpful] = useState('')

    const pollQuestion = "What franchise should come to CSUEB?"
    const option1 = "Panera Bread"
    const option2= "The Habit Burger"
    const option3 = "Pizza Hut"

    async function submit(e){
        e.preventDefault();
        console.log("button triggered")
        console.log(user)
        console.log(question)
        console.log(answer1)
        console.log(answer2)
        console.log(answer3)
        console.log(startDate)
        console.log(endDate)
        try {
            let response = await axios.post("http://localhost:8080/api/v1/poll",{
                user,question,answer1, answer2, answer3 ,startDate, endDate
            })
            console.log(response)
        }

        catch (error) {
            console.log(error.response)
            setErrorFlag(true)
        }
    }

    return (
        <div className = "SinglePoll">
            <form action = "POST" onSubmit={submit}>
                <Box display ="flex"
                     bgcolor="white"
                     flexDirection = {"column"}
                     maxWidth={800}
                     justifyContent="center"
                     margin="auto"
                     marginTop={15}
                     padding={5}
                     borderRadius={5}
                     boxShadow={'5px 5px 10px #ccc'}
                     sx={{":hover":{
                             boxShadow:'10px 10px 20px #ccc'
                         }}}>
                    <Typography variant="h4" padding={1} textAlign="center">{pollQuestion}</Typography>

                    <FormControl>
                        <FormLabel id="demo-radio-buttons-group-label">Choose your favorite option:</FormLabel>
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue="female"
                            name="radio-buttons-group"
                        >
                            <FormControlLabel value={option1} control={<Radio />} label={option1} />
                            <FormControlLabel value={option2} control={<Radio />} label={option2} />
                            <FormControlLabel value={option3} control={<Radio />} label={option3} />
                        </RadioGroup>

                        <Button variant = "contained" type = "submit" onClick={submit}>
                            Submit Answer
                        </Button>
                    </FormControl>

                    <Typography variant="b" padding={3} textAlign="center">Was this rating helpful?</Typography>
                    <IconButton aria-label="delete">
                        <ThumbUpAltOutlinedIcon onClick={(event, newValue) => {
                            setHelpful(helpful+1)}} />
                    </IconButton>

                </Box>
            </form>
        </div>
    )
}

export default DisplayPoll;