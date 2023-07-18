import axios from "axios"
import React, {Fragment, useEffect, useState} from "react"
import {useNavigate, Link} from "react-router-dom";
import {Box, TextField, Typography, Button, Rating} from "@mui/material"
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import ThumbDownAltOutlinedIcon from '@mui/icons-material/ThumbDownAltOutlined';
import IconButton from "@mui/material/IconButton";

function SingleRating(){
    const [value,setValue]=useState('')
    const [helpful,setHelpful] = useState('')


    //Change to value from backend
    let currentQuestion = "How is CS401?";
    let voters = 15;



    return (
        <div>
            <Box display = "flex"
                 bgcolor="white"
                 flexDirection = {"column"}
                 maxWidth={400}
                 alignItems="center"
                 justifyContent="center"
                 margin="auto"
                 marginTop={15}
                 padding={3}
                 borderRadius={5}
                 boxShadow={'5px 5px 10px #ccc'}
                 sx={{":hover":{
                         boxShadow:'10px 10px 20px #ccc'
                     }}}>
                <Typography variant="h5" padding={3} textAlign="center">{currentQuestion}</Typography>

                <Typography component="legend">Your Rating</Typography>
                <Rating
                    name="ratings"
                    size = "large"
                    precision={0.1}
                    //pass exact rating here
                    value={2.7}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                />
                <Typography variant="p" padding={3} textAlign="center">Number of voters: {voters}</Typography>

                <Typography variant="b" padding={3} textAlign="center">Was this rating helpful?</Typography>
                <IconButton aria-label="helpful">
                    <ThumbUpAltOutlinedIcon onClick={(event, newValue) => {
                        setHelpful(helpful+1)}} />


                </IconButton>


            </Box>

        </div>

    )
}

export default SingleRating;