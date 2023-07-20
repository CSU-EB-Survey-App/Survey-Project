import "./rating.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  FormControl,
  FormLabel,
  Box,
  TextField,
  Typography,
  Button,
} from "@mui/material";
import { DatePicker } from '@mui/x-date-pickers';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';


function Rating() {
  const [user, setUser] = useState("");
  const [question, setQuestion] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [errorFlag, setErrorFlag] = useState(false);
  const [value, setValue] = React.useState(2);
  //const [hover, setHover] = React.useState(-1);
  const [hoverValue, setHoverValue] = useState(null);

  async function submit(e) {
    e.preventDefault();
    console.log("button triggered");
    console.log(user);
    console.log(question);
    console.log(endDate);
    try {
      let response = await axios.post("http://localhost:8080/api/v1/rating", {
        user,
        question,
        endDate,
      });
      console.log(response);
    } catch (error) {
      console.log(error.response);
      setErrorFlag(true);
    }
  }
  return (
    <div className="Poll">
      <form action="POST" onSubmit={submit}>
        <Box
          display="flex"
          bgcolor="white"
          flexDirection={"column"}
          maxWidth={800}
          justifyContent="center"
          margin="auto"
          marginTop={15}
          padding={5}
          borderRadius={5}
          boxShadow={"5px 5px 10px #ccc"}
          sx={{
            ":hover": {
              boxShadow: "10px 10px 20px #ccc",
            },
          }}
        >
          <Typography variant="h4" padding={1} textAlign="center">Create a Rating</Typography>
          <FormControl>
            <FormLabel>Rating Prompt:</FormLabel>

            <TextField
              onChange={(e) => {
                setQuestion(e.target.value);
              }}
              type="question"
              fullWidth={true}
              variant="outlined"
              required={true}
            ></TextField>


            <FormLabel>Rating end date:</FormLabel>

            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                  disablePast
                  value={endDate}
                  onChange={(endDate) => setEndDate(endDate)}
              />
            </LocalizationProvider>

            <Button type="submit" onClick={submit}>
              Create Rating
            </Button>
          </FormControl>
        </Box>
      </form>
    </div>
  );
}
export default Rating;
