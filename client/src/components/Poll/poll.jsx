import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import dayjs from "dayjs";
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
import Loading from "../Loading/loading";

function Poll() {
  // const today = dayjs();
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const [question, setQuestion] = useState("");
  const [answer1, setAns1] = useState("");
  const [answer2, setAns2] = useState("");
  const [answer3, setAns3] = useState("");
  const [endDate, setEndDate] = useState("");
  const [errorFlag, setErrorFlag] = useState(false);
  const [errMessage, setErrorMessage] = useState("");
  const [successFlag, setSuccessFlag] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        let token = localStorage.getItem("token");
        const user = await axios.post(
          "https://pioneerpolls-da615733ad68.herokuapp.com/api/v1/auth/user",
          {
            token,
          }
        );
        // console.log("USER: ", user);
        setUser({ ...user.data.user });
        setLoading(false);
      } catch (err) {
        // console.log(err);
      }
    };
    fetchUser();
  }, []);

  const handleErrorFlag = () => {
    setTimeout(() => {
      setErrorFlag(false);
    }, 3000);
  };

  const endDateHandler = (event) => {
    console.log(event.$d);
    setEndDate(event.$d);
  };

  async function submit(e) {
    e.preventDefault();

    try {
      let data = {
        question,
        answer1,
        answer2,
        answer3,
        endDate,
        user: user._id,
      };

      console.log("DATA", data);
      let response = await axios.post(
        "https://pioneerpolls-da615733ad68.herokuapp.com/api/v1/polls/",
        data
      );
      console.log(response);
      setSuccessFlag(true);
      setTimeout(() => {
        navigate("/dashboard");
      }, 3000);
    } catch (error) {
      console.log(error.response);
      setErrorMessage(error.response.data.error);
      setErrorFlag(true);
      handleErrorFlag();
    }
  }

  return (
    <Fragment>
      {loading ? (
        <div
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <Loading />
        </div>
      ) : (
        <div className="Poll">
          <form>
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
              {errorFlag ? (
                <Typography variant="h6" color="error" align="center">
                  {errMessage}
                </Typography>
              ) : null}
              {successFlag ? (
                <Typography variant="h6" color="#008000" align="center">
                  Rating Created
                </Typography>
              ) : null}

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
                    value={endDate}
                    onChange={endDateHandler}
                  />
                </LocalizationProvider>

                <Button type="submit" onClick={submit}>
                  Create Poll
                </Button>
              </FormControl>
            </Box>
          </form>
        </div>
      )}
    </Fragment>
  );
}

export default Poll;
