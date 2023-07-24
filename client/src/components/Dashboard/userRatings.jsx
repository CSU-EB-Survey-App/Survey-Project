import React, { Fragment, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import moment from "moment";
// Material UI Imports
import { Grid, Typography, Card, CardHeader, CardContent } from "@mui/material";
import StarOutlineIcon from "@mui/icons-material/StarOutline";

// Imports

// const Styles = {
//   gridContainer: {
//     marginTop: "15px",
//   },
//   bannerContainer: {
//     width: "50%",
//     display: "inline-block",
//   },
//   bannerText: {
//     textAlign: "center",
//   },
// };

<<<<<<< HEAD
const UserRatings = () => {
=======
const UserRatings = ({ header, url }) => {
>>>>>>> 22bc4b4d68045dba1473bfd40491da8212cb9cfa
  // const [user, setUser] = useState();
  const [ratings, setRatings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      let token = localStorage.getItem("token");
      const user = await axios.post(
        `https://pioneerpolls-da615733ad68.herokuapp.com/api/v1/auth/user`,
        {
          token,
        }
      );
      console.log("USER POLLS: ", user);
      setRatings(user.data.user.ratings || []);
      setLoading(false);
    };
    fetchUser();
  }, []);

  if (loading) {
    return null;
  }

  if (ratings.length === 0) {
    return null;
  }

  const popularRatings = ratings.sort((a, b) => b.useful - a.useful);

  return (
    <Fragment>
      {popularRatings.length >= 1 ? (
        <Fragment>
          <Grid item xs={3}>
            <NavLink
              to={`/ratings/${popularRatings[0]._id}`}
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
                        {popularRatings[0].useful}
                      </Grid>
                      <Grid item>
                        <StarOutlineIcon style={{ opacity: "0.5" }} />
                      </Grid>
                    </Grid>
                  }
                  subheader={moment(popularRatings[0].createdAt).format(
                    "MMMM DD, YYYY"
                  )}
                />
                <CardContent>
                  <Typography sx={{ fontSize: 18 }}>
                    {popularRatings[0].question}
                  </Typography>
                </CardContent>
              </Card>
            </NavLink>
          </Grid>
        </Fragment>
      ) : null}
      {popularRatings.length >= 2 ? (
        <Fragment>
          <Grid item xs={3}>
            <NavLink
              to={`/ratings/${popularRatings[1]._id}`}
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
                        {popularRatings[1].useful}
                      </Grid>
                      <Grid item>
                        <StarOutlineIcon style={{ opacity: "0.5" }} />
                      </Grid>
                    </Grid>
                  }
                  subheader={moment(popularRatings[1].createdAt).format(
                    "MMMM DD, YYYY"
                  )}
                />
                <CardContent>
                  <Typography sx={{ fontSize: 18 }}>
                    {popularRatings[1].question}
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

export default UserRatings;
