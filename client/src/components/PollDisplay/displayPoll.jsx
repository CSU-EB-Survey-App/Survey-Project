import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import { useNavigate, Link, useParams } from "react-router-dom";
import {
  Radio,
  RadioGroup,
  FormControlLabel,
  Box,
  TextField,
  Typography,
  Button,
  FormControl,
  FormLabel,
} from "@mui/material";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import ThumbDownAltOutlinedIcon from "@mui/icons-material/ThumbDownAltOutlined";
import IconButton from "@mui/material/IconButton";
import Loading from "../Loading/loading";

function DisplayPoll() {
  const { id } = useParams();

  // State management
  const [user, setUser] = useState("");
  const [question, setQuestion] = useState("");
  const [choice, setChoice] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [errorFlag, setErrorFlag] = useState(false);

  const [poll, setPoll] = useState({});
  const [loading, setLoading] = useState(true);

  // fetch user and poll info
  useEffect(() => {
    const fetchUser = async () => {
      let token = localStorage.getItem("token");
      const user = await axios.post("http://localhost:8080/api/v1/auth/user", {
        token,
      });
      // console.log("USER: ", user);
      setUser({ ...user.data.user });
      setLoading(false);
    };

    const fetchPoll = async () => {
      const request = await axios.get(
        `http://localhost:8080/api/v1/polls/${id}`
      );
      console.log("POLL: ", request);
      setPoll({ ...request.data.poll });
      setLoading(false);
    };

    fetchUser();
    fetchPoll();
  }, []);

  const onSubmitHandler = async (event) => {
    try {
      event.preventDefault();
      console.log("ID: ", id);
      console.log("USER: ", user._id);
      let request = await axios.put(
        `http://localhost:8080/api/v1/polls/answer/${id}`,
        {
          answer: choice,
          user: user._id,
        }
      );
      console.log(request);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  const usefulHandler = async () => {
    try {
      console.log("VOTING USEFUL");
      let request = await axios.put(
        `http://localhost:8080/api/v1/polls/useful/${poll._id}`,
        {
          user: user._id,
        }
      );
      console.log(request);
      window.location.reload();
    } catch (err) {}
  };

  const radioSelectHandler = (event) => {
    console.log(event.target.value);
    setChoice(event.target.value);
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
        <Fragment>
          <div className="SinglePoll">
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
                  {poll.question}
                </Typography>

                <FormControl>
                  {poll.voters.includes(user._id) ? (
                    <Fragment>
                      <div style={{ marginBottom: "15px" }}>
                        <Typography variant="h5" align="center">
                          Results:
                        </Typography>
                        <Typography align="center" variant="h6">
                          Option 1: {poll.answer1}
                        </Typography>
                        <Typography align="center">
                          {poll.answer1Count} voters
                        </Typography>
                        <Typography align="center" variant="h6">
                          Option 2: {poll.answer2}
                        </Typography>
                        <Typography align="center">
                          {poll.answer2Count} voters
                        </Typography>
                        <Typography align="center" variant="h6">
                          Option 3: {poll.answer3}
                        </Typography>
                        <Typography align="center">
                          {poll.answer3Count} voters
                        </Typography>
                      </div>
                    </Fragment>
                  ) : (
                    <Fragment>
                      <FormLabel id="demo-radio-buttons-group-label">
                        Choose your favorite option:
                      </FormLabel>
                      <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        name="radio-buttons-group"
                      >
                        <FormControlLabel
                          value={"answer1Count"}
                          control={<Radio />}
                          label={poll.answer1}
                          onChange={radioSelectHandler}
                        />
                        <FormControlLabel
                          value={"answer2Count"}
                          control={<Radio />}
                          label={poll.answer2}
                          onChange={radioSelectHandler}
                        />
                        <FormControlLabel
                          value={"answer3Count"}
                          control={<Radio />}
                          label={poll.answer3}
                          onChange={radioSelectHandler}
                        />
                      </RadioGroup>

                      <Button
                        variant="contained"
                        type="submit"
                        onClick={onSubmitHandler}
                      >
                        Submit Answer
                      </Button>
                    </Fragment>
                  )}
                </FormControl>

                {!poll.usefulVoters ? null : (
                  <Fragment>
                    {poll.usefulVoters.includes(user._id) ? (
                      <div style={{ marginTop: "15px" }}>
                        <Typography>
                          {poll.useful}
                          {poll.usefulVoters.length < 2
                            ? " person "
                            : " people "}
                          found this useful
                        </Typography>
                      </div>
                    ) : (
                      <Fragment>
                        <Typography variant="b" padding={3} textAlign="center">
                          Was this poll helpful?
                        </Typography>
                        <IconButton
                          aria-label="helpful"
                          onClick={usefulHandler}
                        >
                          <ThumbUpAltOutlinedIcon />
                        </IconButton>
                      </Fragment>
                    )}
                  </Fragment>
                )}
              </Box>
            </form>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
}

export default DisplayPoll;
