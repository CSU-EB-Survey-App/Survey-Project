
// import "./rating.css"
// import axios from "axios"
// import React, {useEffect, useState} from "react"
// import {useNavigate, Link} from "react-router-dom";
// import {FormControl, FormLabel, Box, TextField, Typography, Button} from "@mui/material"

// // import StarIcon from '@mui/icons-material/Star';
// import { FaStar } from "react-icons/fa";

// function Rating() {

//     const [user,setUser]=useState('')
//     const [question, setQuestion] =useState('')
//     const [startDate, setStartDate] =useState('')
//     const [endDate, setEndDate] =useState('')
//     const [errorFlag, setErrorFlag] =useState(false)
//     const [value, setValue] = React.useState(2);
//     //const [hover, setHover] = React.useState(-1);
//     const [hoverValue, setHoverValue] = useState(null);


//     async function submit(e){
//         e.preventDefault();
//         console.log("button triggered")
//         console.log(user)
//         console.log(question)
//         console.log(startDate)
//         console.log(endDate)
//         try {
//             let response = await axios.post("http://localhost:8080/api/v1/rating",{
//                 user,question, startDate, endDate
//             })
//             console.log(response)
//         }

//         catch (error) {
//             console.log(error.response)
//             setErrorFlag(true)
//         }
//     }
//     return (
//         <div className = "Rating">
//             <form action = "POST" onSubmit={submit}>
//                 <Box display ="flex"
//                      bgcolor="white"
//                      flexDirection = {"column"}
//                      maxWidth={400}
//                      alignItems="center"
//                      justifyContent="center"
//                      margin="auto"
//                      marginTop={5}
//                      padding={3}
//                      borderRadius={5}
//                      boxShadow={'5px 5px 10px #ccc'}
//                      sx={{":hover":{
//                              boxShadow:'10px 10px 20px #ccc'
//                          }}}>
//                     <h2>
//                         Create a Rating
//                     </h2>
//                     <FormControl>
//                         <FormLabel>
//                             What do you want to rate?
//                         </FormLabel>

//                         <TextField
//                             onChange = {(e) => {setQuestion (e.target.value)}  }

//                             type = "question"
//                             fullWidth={true}
//                             variant = "filled"
//                             required={true}>
//                         </TextField>

//                         <FormLabel>
//                             Rating Start Date:
//                         </FormLabel>

//                         <TextField
//                             onChange = {(e) => {setStartDate (e.target.value)}  }
//                             type = "date"
//                             fullWidth={true}
//                             variant = "filled"
//                             defaultValue="?"
//                             required={true}>
//                         </TextField>

//                         <FormLabel>
//                             Rating end date:
//                         </FormLabel>

//                         <TextField
//                             onChange = {(e) => {setEndDate (e.target.value)}  }
//                             type = "date"
//                             fullWidth={true}
//                             variant = "filled"
//                             defaultValue="?"
//                             required={true}>
//                         </TextField>

//                         <Button type = "submit" onClick={submit}>
//                             Create Rating
//                         </Button>
//                     </FormControl>


//                 </Box>
//             </form>

//             <div className="starRating">
//         <Box sx={{ width: 300, height: 100, backgroundColor: 'white', display: "flex", alignItems: "center", borderRadius: '16px' }}>
//         <Typography component="legend"> Rating: </Typography>
//           {[1, 2, 3, 4, 5].map((star) => (
//             <StarIcon
//               key={star}
//               style={{ width: "32px",height:"32px",color: star <= value ? "yellow" : "gray", cursor:"pointer" }}
//               onMouseEnter={() => setHoverValue(star)}
//               onMouseLeave={() => setHoverValue(null)}
//               onClick={() => setValue(star)}
//             />
        
//           ))}
//         </Box>
//         </div>
//         </div>
//     )
// }
// export default Rating;
