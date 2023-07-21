import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import dayjs from "dayjs";
import {
  Box,
  TextField,
  Typography,
  Button,
  FormControl,
  FormLabel,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

function Poll() {
  const today = dayjs();
  const [user, setUser] = useState("");
  const [question, setQuestion] = useState("");
  const [answer1, setAns1] = useState("");
  const [answer2, setAns2] = useState("");
  const [answer3, setAns3] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState(today);
  const [errorFlag, setErrorFlag] = useState(false);

  async function submit(e) {
    e.preventDefault();
    // console.log("button triggered");
    // console.log(user);
    // console.log(question);
    // console.log(answer1);
    // console.log(answer2);
    // console.log(answer3);
    // console.log(startDate);
    // console.log(endDate);
    try {
      console.log("ENDDATE", endDate.$d);
      let response = await axios.post("http://localhost:8080/api/v1/poll", {
        user,
        question,
        answer1,
        answer2,
        answer3,
        startDate,
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
          <Typography variant="h4" padding={1} textAlign="center">
            Create a Poll
          </Typography>

          <FormControl>
            <FormLabel>Poll Prompt:</FormLabel>

            <TextField
              onChange={(e) => {
                setQuestion(e.target.value);
              }}
              type="question"
              fullWidth={true}
              variant="outlined"
              required={true}
            ></TextField>
            <FormLabel>Answer 1:</FormLabel>

            <TextField
              onChange={(e) => {
                setAns1(e.target.value);
              }}
              type="answer1"
              fullWidth={true}
              variant="outlined"
              required={true}
            ></TextField>
            <FormLabel>Answer 2:</FormLabel>

            <TextField
              onChange={(e) => {
                setAns2(e.target.value);
              }}
              type="answer2"
              fullWidth={true}
              variant="outlined"
              required={true}
            ></TextField>
            <FormLabel>Answer 3:</FormLabel>

            <TextField
              onChange={(e) => {
                setAns3(e.target.value);
              }}
              type="answer3"
              fullWidth={true}
              variant="outlined"
              required={true}
            ></TextField>

            <FormLabel>Poll end date:</FormLabel>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                disablePast
                minDate={today}
                value={endDate}
                onChange={(newValue) => setEndDate(newValue)}
              />
            </LocalizationProvider>

            <Button type="submit" onClick={submit}>
              Create Poll
            </Button>
          </FormControl>
        </Box>
      </form>
    </div>
  );
}

export default Poll;
