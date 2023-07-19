import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import { useNavigate, Link, useParams } from "react-router-dom";
import { Box, TextField, Typography, Button, Rating } from "@mui/material";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import ThumbDownAltOutlinedIcon from "@mui/icons-material/ThumbDownAltOutlined";
import IconButton from "@mui/material/IconButton";

// Components
import Loading from "../Loading/loading";

function SingleRating() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [rating, setRating] = useState({});
  const [user, setUser] = useState({});
  //   const [helpful, setHelpful] = useState("");
  const [value, setValue] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      let token = localStorage.getItem("token");
      const user = await axios.post("http://localhost:8080/api/v1/auth/user", {
        token,
      });
      console.log("USER: ", user);
      setUser({ ...user.data.user });
    };
    const fetchRating = async () => {
      const request = await axios.get(
        `http://localhost:8080/api/v1/ratings/${id}`
      );
      console.log("RATING: ", request);
      setRating({ ...request.data.rating });
    };

    fetchUser();
    fetchRating();
    setLoading(false);
  }, []);

  const helpfulHandler = async () => {
    try {
      console.log("VOTING USEFUL");
      let request = await axios.put(
        `http://localhost:8080/api/v1/ratings/useful/${rating._id}`,
        {
          user: user._id,
        }
      );
      console.log(request);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  const ratingHandler = async () => {
    try {
    } catch (err) {
      console.log(err);
    }
  };

  const handleRatingChange = (event) => {
    console.log("RATING", event.target.value);
    // if (newValue >= 1 && newValue <= 5) {
    //   console.log("RATING CHANGE: ", newValue);
    //   setRating(newValue);
    // }
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
        <div>
          <Box
            display="flex"
            bgcolor="white"
            flexDirection={"column"}
            maxWidth={400}
            alignItems="center"
            justifyContent="center"
            margin="auto"
            marginTop={15}
            padding={3}
            borderRadius={5}
            boxShadow={"5px 5px 10px #ccc"}
            sx={{
              ":hover": {
                boxShadow: "10px 10px 20px #ccc",
              },
            }}
          >
            <Typography variant="h5" padding={3} textAlign="center">
              {rating.question}
            </Typography>

            <Typography component="legend">Your Rating</Typography>
            <Rating
              name="ratings"
              size="large"
              //pass exact rating here
              value={value}
              max={5}
              onChange={handleRatingChange}
            />
            <Typography variant="p" padding={3} textAlign="center">
              Number of voters: {!rating.voters ? null : rating.voters.length}
            </Typography>

            {/* Check if user has already voted */}

            {!rating.usefulVoters ? null : (
              <Fragment>
                {rating.usefulVoters.includes(user._id) ? (
                  <Typography>
                    {rating.usefulVoters.length}{" "}
                    {rating.usefulVoters.length < 2 ? "person" : "people"} found
                    this useful
                  </Typography>
                ) : (
                  <Fragment>
                    <Typography variant="b" padding={3} textAlign="center">
                      Was this rating helpful?
                    </Typography>
                    <IconButton aria-label="helpful" onClick={helpfulHandler}>
                      <ThumbUpAltOutlinedIcon />
                    </IconButton>
                  </Fragment>
                )}
              </Fragment>
            )}
          </Box>
        </div>
      )}
    </Fragment>
  );
}

export default SingleRating;
