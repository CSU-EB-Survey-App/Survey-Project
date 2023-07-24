import { Grid, Card, CardContent, Typography, CardHeader } from "@mui/material";
import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";

import StarOutlineIcon from "@mui/icons-material/StarOutline";
import moment from "moment";

const PopularPolls = ({ data }) => {
  if (!data || data.length === 0) {
    return null;
  }
  // Sort the data in descending order based on "useful" property
  const sortedData = data.sort((a, b) => b.useful - a.useful);

  // Get the top 4 objects with highest votes
  const topFourData = sortedData.slice(0, 4);
  return (
    <Fragment>
      {topFourData.map((item, index) => (
        <Grid key={index} item xs={3}>
          <NavLink
            to={`/polls/${item._id}`}
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
                      {item.useful}
                    </Grid>
                    <Grid item>
                      <StarOutlineIcon style={{ opacity: "0.5" }} />
                    </Grid>
                  </Grid>
                }
                subheader={moment(item.createdAt).format("MMMM DD, YYYY")}
              />
              <CardContent>
                <Typography sx={{ fontSize: 18 }}>{item.question}</Typography>
              </CardContent>
            </Card>
          </NavLink>
        </Grid>
      ))}
    </Fragment>
  );
};

export default PopularPolls;
