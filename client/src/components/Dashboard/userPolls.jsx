import React, { Fragment, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import moment from "moment";
// Material UI Imports
import { Grid, Typography, Card, CardHeader, CardContent } from "@mui/material";
import StarOutlineIcon from "@mui/icons-material/StarOutline";

// Imports

const Styles = {
  gridContainer: {
    marginTop: "15px",
  },
  bannerContainer: {
    width: "50%",
    display: "inline-block",
  },
  bannerText: {
    textAlign: "center",
  },
};

const UserPosts = () => {
  // const [user, setUser] = useState();
  const [polls, setPolls] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      let token = localStorage.getItem("token");
      const user = await axios.post(`http://localhost:8080/api/v1/auth/user`, {
        token,
      });
      console.log("USER POLLS: ", user);
      setPolls(user.data.user.polls || []);
      setLoading(false);
    };
    fetchUser();
  }, []);

  if (loading) {
    return null;
  }

  if (polls.length === 0) {
    return null;
  }

  const popularPolls = polls.sort((a, b) => b.useful - a.useful);

  return (
    <Fragment>
      {popularPolls.length >= 1 ? (
        <Fragment>
          <Grid item xs={3}>
            <NavLink
              to={`/polls/${popularPolls[0]._id}`}
              style={{ textDecoration: "none", userSelect: "none" }}
            >
              <Card
                sx={{ minWidth: 200, minHeight: 200 }}
                style={{ margin: "10px" }}
              >
                <CardHeader
                  action={
                    <Grid container direction="row" alignItems="center">
                      <Grid item style={{ paddingBottom: "5px" }}>
                        {popularPolls[0].useful}
                      </Grid>
                      <Grid item>
                        <StarOutlineIcon style={{ opacity: "0.5" }} />
                      </Grid>
                    </Grid>
                  }
                  subheader={moment(popularPolls[0].createdAt).format(
                    "MMMM DD, YYYY"
                  )}
                />
                <CardContent>
                  <Typography sx={{ fontSize: 18 }}>
                    {popularPolls[0].question}
                  </Typography>
                </CardContent>
              </Card>
            </NavLink>
          </Grid>
        </Fragment>
      ) : null}
      {popularPolls.length >= 2 ? (
        <Fragment>
          <Grid item xs={3}>
            <NavLink
              to={`/polls/${popularPolls[1]._id}`}
              style={{ textDecoration: "none", userSelect: "none" }}
            >
              <Card
                sx={{ minWidth: 200, minHeight: 200 }}
                style={{ margin: "10px" }}
              >
                <CardHeader
                  action={
                    <Grid container direction="row" alignItems="center">
                      <Grid item style={{ paddingBottom: "5px" }}>
                        {popularPolls[1].useful}
                      </Grid>
                      <Grid item>
                        <StarOutlineIcon style={{ opacity: "0.5" }} />
                      </Grid>
                    </Grid>
                  }
                  subheader={moment(popularPolls[1].createdAt).format(
                    "MMMM DD, YYYY"
                  )}
                />
                <CardContent>
                  <Typography sx={{ fontSize: 18 }}>
                    {popularPolls[1].question}
                  </Typography>
                </CardContent>
              </Card>
            </NavLink>
          </Grid>
        </Fragment>
      ) : null}
    </Fragment>
  );
};

export default UserPosts;
