import "./dashboard.css";
import axios from "axios";
import config from "../../config";
import React, { Fragment, useEffect, useState } from "react";

// Material UI Imports
import { Grid, Typography } from "@mui/material";

// Imports
import UserPolls from "./userPolls";
import UserRatings from "./userRatings";
import Loading from "../Loading/loading";
import PopularPolls from "./popularPolls";
import PopularRatings from "./popularRatings";

function Dashboard(props) {
  const [ratings, setRatings] = useState([]);
  const [polls, setPolls] = useState([]);
  const [loadingRatings, setLoadingRatings] = useState(true); // New loading state for ratings
  const [loadingPolls, setLoadingPolls] = useState(true); // New loading state for polls

  useEffect(() => {
    const fetchRatings = async () => {
      const ratings = await axios.get(`${config.apiUrl}/api/v1/ratings/`);
      // console.log("RATINGS", ratings);
      setRatings(ratings.data.ratings);
      setLoadingRatings(false);
    };
    const fetchPolls = async () => {
      const polls = await axios.get(`${config.apiUrl}/api/v1/polls/`);
      // console.log("POLLS: ", polls);
      setPolls(polls.data.polls);
      setLoadingPolls(false);
    };
    fetchRatings();
    fetchPolls();
  }, []);

  const loading = loadingRatings || loadingPolls;

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
          <Typography align="center" variant="h5" style={{ marginTop: "35px" }}>
            Popular Polls
          </Typography>
          <Grid container spacing={2}>
            <PopularPolls data={polls} />
          </Grid>
          <Typography align="center" variant="h5" style={{ marginTop: "35px" }}>
            Popular Ratings
          </Typography>
          <Grid container spacing={2}>
            <PopularRatings data={ratings} />
          </Grid>
          <Typography align="center" variant="h5" style={{ marginTop: "35px" }}>
            My Popular Posts
          </Typography>
          <Grid container spacing={2}>
            <UserPolls />
            <UserRatings />
          </Grid>
        </div>
      )}
    </Fragment>
  );
}

export default Dashboard;
