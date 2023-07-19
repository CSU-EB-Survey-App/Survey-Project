import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import moment from "moment";
// Material UI Imports
import { Grid, Typography, Card, CardHeader, CardContent } from "@mui/material";
import StarOutlineIcon from "@mui/icons-material/StarOutline";

// Imports

const Styles = {
  gridContainer: {
    marginTop: "40px",
  },
  bannerText: {
    marginTop: "40px",
  },
};

function userPosts({ user }) {
  //   if (user.polls.length < 1 || !user.ratings.length < 1) {
  //     return (
  //       <Typography variant="h5" align="center">
  //         You have no posts
  //       </Typography>
  //     );
  //   }
  const popularPolls = user.polls.sort((a, b) => b.useful - a.useful);
  const popularRatings = user.ratings.sort((a, b) => b.useful - a.useful);
  //   console.log("POP POLLS", popularPolls);
  //   console.log("POP RATINGS", popularRatings);
  return (
    <Fragment>
      <div>
        <Typography variant="h5" align="center" style={Styles.bannerText}>
          My Popular Posts
        </Typography>
      </div>
      <div className="gridContainer">
        <Grid container spacing={2} style={Styles.gridContainer}>
          <Grid item xs={3}>
            <NavLink
              to={`/poll/${popularPolls[0]._id}`}
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
          <Grid item xs={3}>
            <NavLink
              to={`/poll/${popularPolls[1]._id}`}
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
          <Grid item xs={3}>
            <NavLink
              to={`/rating/${popularRatings[0]._id}`}
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
          <Grid item xs={3}>
            <NavLink
              to={`/rating/${popularRatings[1]._id}`}
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
        </Grid>
      </div>
    </Fragment>
  );
}

export default userPosts;
