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

function AccountPage() {
  const today = dayjs();
  const [user, setUser] = useState("");
  const [question, setQuestion] = useState("");
  const [answer1, setAns1] = useState("");
  const [answer2, setAns2] = useState("");
  const [answer3, setAns3] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState(today);
  const [errorFlag, setErrorFlag] = useState(false);

  const accountID = "GP5090";
  const accountCreatedDate = "July 1, 2023";
  const numberOfPolls = 3;
  const numberOfRatings = 5;
  const email = "yoda234@fakemail.com";
   
//FIXME this function is not finished
async function DeleteAccount(){
    console.log(accountID);
    try{
        // @route POST /api/v1/auth/delete
        let response = await axios.delete('http://localhost:8080//api/v1/auth/delete/${accountID}');
        console.log(response);
    } catch(error){
        console.log(error.response);
        setErrorFlag(true);
    }
}

  async function submit(e) {
    e.preventDefault();
    console.log("button triggered");
    console.log(user);
    console.log(question);
    console.log(answer1);
    console.log(answer2);
    console.log(answer3);
    console.log(startDate);
    console.log(endDate);
    try {
      let response = await axios.post("http://localhost:8080/api/v1/account", {
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
            Account Information
          </Typography>

          <Typography>
            Account ID: {accountID}
          </Typography>

          <Typography>
            Account Created On: {accountCreatedDate}
          </Typography>

          <Typography>
            User E-mail: {email}
          </Typography>

          <Typography>
            Number of Ratings: {numberOfRatings}
          </Typography>
          
          <Typography>
            Number of Polls: {numberOfPolls}
          </Typography>

          <Button 
            variant="contained"
            onClick = {DeleteAccount}
            padding = {3}>
                Delete Account
          </Button>

        </Box>
      </form>
    </div>
  );
}

export default AccountPage;
