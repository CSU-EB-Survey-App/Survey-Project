import "./register.css";
import axios from "axios";
import config from "../../config";
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Box, TextField, Typography, Button } from "@mui/material";

function Register() {
  const navigate = useNavigate();

  const [studentID, setStudentID] = useState("");

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [errorFlag, setErrorFlag] = useState(false);

  async function submit(e) {
    e.preventDefault();
    console.log("button triggered");
    console.log(studentID);
    console.log(password);
    console.log(email);

    try {
      let response = await axios.post(`${config.apiUrl}/api/v1/auth/register`, {
        studentID,
        password,
        email,
      });
      console.log(response);

      // Set session token
      localStorage.setItem("token", response.data.token);
      // Navigate user to dashboard
      navigate("/dashboard");
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
    <div className="login">
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
            Register
          </Typography>
          {errorFlag ? <p>Account Already Exists</p> : null}
          <TextField
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            name=""
            id=""
            margin="normal"
            type="email"
            variant="outlined"
            placeholder="Email"
          ></TextField>
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
            Sign-Up
          </Button>
          <Button sx={{ marginTop: 3, borderRadius: 3 }}>
            <Link to="/">Switch to Login</Link>
          </Button>
        </Box>
      </form>
    </div>
  );
}

export default Register;
