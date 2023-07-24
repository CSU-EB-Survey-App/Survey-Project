import "./login.css";
import axios from "axios";
import React, { Fragment, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Box, TextField, Typography, Button } from "@mui/material";
import {sourceURL} from "../SourceURL";

function Login() {
  //create parameters and functions for login
  const [studentID, setStudentID] = useState("");

  const [password, setPassword] = useState("");

  const [errorFlag, setErrorFlag] = useState(false);

  const Navigate = useNavigate();

  //function for submit and information to be sent to backend
  async function submit(e) {
    e.preventDefault();
    console.log("button triggered");
    console.log(studentID);
    console.log(password);
    try {
      let response = await axios.post(
        `https://${sourceURL}/api/v1/auth/login`,
        {
          studentID,
          password,
        }
      );
      console.log(response);
      localStorage.setItem("token", response.data.token);
      Navigate("/dashboard");
    } catch (error) {
      console.log(error.response);
      setErrorFlag(true);
      handleLoginErrorFlag();
    }
  }

  const handleLoginErrorFlag = () => {
    setTimeout(() => {
      setErrorFlag(false);
    }, 3000);
  };
  return (
    <Fragment>
      <form>
        <Box
          display="flex"
          bgcolor="white"
          flexDirection={"column"}
          maxWidth={400}
          alignItems="center"
          justifyContent="center"
          margin="auto"
          marginTop={5}
          padding={3}
          borderRadius={5}
          boxShadow={"5px 5px 10px #ccc"}
          sx={{
            ":hover": {
              boxShadow: "10px 10px 20px #ccc",
            },
          }}
        >
          <Typography variant="h4" padding={3} textAlign="center">
            Login
          </Typography>
          {errorFlag ? <p className="error">Invalid Credentials</p> : null}
          <TextField
            onChange={(e) => {
              setStudentID(e.target.value);
            }}
            name=""
            id=""
            margin="normal"
            type="studentID"
            variant="outlined"
            placeholder="Student ID"
          ></TextField>
          <TextField
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            name=""
            id=""
            margin="normal"
            type="password"
            variant="outlined"
            placeholder="Password"
          ></TextField>
          <Button
            sx={{ marginTop: 3, borderRadius: 3 }}
            variant="contained"
            color="warning"
            onClick={submit}
          >
            Login
          </Button>
          <Button sx={{ marginTop: 0, borderRadius: 0 }}>
            <Link to="/register">Not Registered? Create an Account</Link>
          </Button>
        </Box>
      </form>
    </Fragment>
  );
}

export default Login;
