import "./rating.css";
import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FormControl,
  FormLabel,
  Box,
  TextField,
  Typography,
  Button,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import Loading from "../Loading/loading";

function Rating() {
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const [question, setQuestion] = useState("");
  const [endDate, setEndDate] = useState("");
  const [loading, setLoading] = useState(true);
  const [errorFlag, setErrorFlag] = useState(false);
  const [errMessage, setErrorMessage] = useState("");
  const [successFlag, setSuccessFlag] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        let token = localStorage.getItem("token");
        const user = await axios.post(
          "http://localhost:8080/api/v1/auth/user",
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

  async function submit(e) {
    e.preventDefault();
    try {
      let data = {
        question,
        endDate,
        user: user._id,
      };

      console.log(data);

      let response = await axios.post(
        "http://localhost:8080/api/v1/ratings/",
        data
      );
      setSuccessFlag(true);

      setTimeout(() => {
        navigate("/dashboard");
      }, 3000);
      // console.log(response);
    } catch (error) {
      // console.log(error.response.data.error);
      setErrorMessage(error.response.data.error);
      setErrorFlag(true);
      handleErrorFlag();
    }
  }

  const endDateHandler = (event) => {
    console.log(event.$d);
    setEndDate(event.$d);
  };

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
                Create a Rating
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
                <FormLabel>Rating Prompt:</FormLabel>

                <TextField
                  onChange={(e) => {
                    setQuestion(e.target.value);
                  }}
                  type="question"
                  fullWidth={true}
                  variant="outlined"
                ></TextField>

                <FormLabel>Rating end date:</FormLabel>

                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    disablePast
                    value={endDate}
                    onChange={endDateHandler}
                  />
                </LocalizationProvider>

                <Button type="submit" onClick={submit}>
                  Create Rating
                </Button>
              </FormControl>
            </Box>
          </form>
        </div>
      )}
    </Fragment>
  );
}
export default Rating;
