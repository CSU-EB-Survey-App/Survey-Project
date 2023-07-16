import "./rating.css"
import axios from "axios"
import React, {useEffect, useState} from "react"
import {useNavigate, Link} from "react-router-dom";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import StarIcon from '@mui/icons-material/Star';
import { FaStar } from "react-icons/fa";

//labeling the levels of the stars

const labels = {
    0.5: 'Useless',
    1: 'Useless+',
    1.5: 'Poor',
    2: 'Poor+',
    2.5: 'Ok',
    3: 'Ok+',
    3.5: 'Good',
    4: 'Good+',
    4.5: 'Excellent',
    5: 'Excellent+',
  };
  

  function getLabelText(value) {
    return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
  }

function Rating() {

    const [user,setUser]=useState('')

    const [question, setQuestion] =useState('')

    const [startDate, setStartDate] =useState('')

    const [endDate, setEndDate] =useState('')

    const [errorFlag, setErrorFlag] =useState(false)

    const [value, setValue] = React.useState(2);
    //const [hover, setHover] = React.useState(-1);
    const [hoverValue, setHoverValue] = useState(null);
  

   

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
    /*
    const StarRating = () => {
        const [rating, setRating] = useState(null);
      }
      */
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

          /* fvd*/  
        <div className="starRating">
        <Box sx={{ display: "flex", alignItems: "center" }}>
        <Typography component="legend">Rating: </Typography>
          {[1, 2, 3, 4, 5].map((star) => (
            <StarIcon
              key={star}
              
              style={{ width: "32px",height:"32px",color: star <= value ? "yellow" : "gray", cursor:"pointer" }}
              onMouseEnter={() => setHoverValue(star)}
              onMouseLeave={() => setHoverValue(null)}
              onClick={() => setValue(star)}
            />
        
          ))}
        </Box>
        </div>
               
            
                


        </div>
        

        
    )
    



      }













export default Rating;