import "./dashboard.css";
import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
// Material UI Imports
import { Grid, Typography } from "@mui/material";

// Imports
import PostCarousel from "./postCarousel";
import UserPosts from "./userPosts";
import Loading from "../Loading/loading";

function Dashboard(props) {
  const [user, setUser] = useState({});
  const [ratings, setRatings] = useState([]);
  const [polls, setPolls] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      let token = localStorage.getItem("token");
      const user = await axios.post("http://localhost:8080/api/v1/auth/user", {
        token,
      });
      // console.log("USER: ", user);
      setUser({ ...user.data.user });
      props.handleuser(user.data.user);
    };
    const fetchRatings = async () => {
      const ratings = await axios.get("http://localhost:8080/api/v1/ratings/");
      // console.log("RATINGS", ratings);
      setRatings([...ratings.data.ratings]);
    };
    const fetchPolls = async () => {
      const polls = await axios.get("http://localhost:8080/api/v1/polls/");
      // console.log("POLLS: ", polls);
      setPolls([...polls.data.polls]);
      setLoading(false);
    };
    fetchUser();
    fetchRatings();
    fetchPolls();
  }, []);

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
        <div style={{ marginTop: "100px" }}>
          <Grid container spacing={1}>
            <PostCarousel
              url={"polls"}
              items={polls}
              emptyItemsMessage={"Get started by creating a post"}
            >
              Popular Polls
            </PostCarousel>
            <PostCarousel
              url={"ratings"}
              items={ratings}
              emptyItemsMessage={null}
            >
              Popular Ratings
            </PostCarousel>
          </Grid>
          <UserPosts />
        </div>
      )}
    </Fragment>
  );
}

export default Dashboard;
