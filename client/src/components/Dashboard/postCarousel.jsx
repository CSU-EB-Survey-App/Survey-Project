import {
  Grid,
  Card,
  CardContent,
  Typography,
  Tooltip,
  Avatar,
  CardHeader,
} from "@mui/material";
import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import Slider from "react-slick";
import PersonIcon from "@mui/icons-material/Person";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import moment from "moment";

import SVGLeft from "../../imgs/carousel-left.svg";
import SVGRight from "../../imgs/carousel-right.svg";

const Styles = {
  bannerText: {
    marginTop: "15px",
  },
};

const PrevArrow = ({ onClick }) => (
  <img
    className="slick-prev"
    style={{ height: "66px", width: "50px", left: "-45px", opacity: "0.5" }}
    src={SVGLeft}
    alt="Previous"
    onClick={onClick}
  />
);

const NextArrow = ({ onClick }) => (
  <img
    className="slick-next"
    style={{ height: "66px", width: "50px", right: "-45px", opacity: "0.5" }}
    src={SVGRight}
    alt="Previous"
    onClick={onClick}
  />
);

function pollsCarousel({ items, children, url, emptyItemsMessage }) {
  // Setting for slick
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 4,
    draggable: false,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  // Fill remaining slots with empty divs
  const filledData = items.sort((a, b) => b.useful - a.useful);
  //   console.log("CAROUSEL: ", items);
  return (
    <Fragment>
      {items.length < 1 ? (
        <Typography variant="h5" style={{ width: "100%", textAlign: "center" }}>
          {emptyItemsMessage}
        </Typography>
      ) : (
        <Grid item xs={12}>
          <Typography variant="h5" align="center" style={Styles.bannerText}>
            {children}
          </Typography>
          <Slider
            {...settings}
            style={{ width: "90%", margin: "auto", marginTop: "15px" }}
          >
            {filledData.map((item, index) => (
              <div className={"slimeContainer"} key={index}>
                <NavLink
                  to={`/${url}/${item._id}`}
                  style={{ textDecoration: "none", userSelect: "none" }}
                >
                  <Card
                    sx={{ minWidth: 200, minHeight: 200 }}
                    style={{ margin: "10px" }}
                  >
                    <CardHeader
                      avatar={
                        <Avatar>
                          <PersonIcon />
                        </Avatar>
                      }
                      action={
                        <Grid container direction="row" alignItems="center">
                          <Grid item style={{ paddingBottom: "5px" }}>
                            {item.useful}
                          </Grid>
                          <Grid item>
                            <Tooltip
                              title = "Usefulness Votes">
                              <StarOutlineIcon style={{ opacity: "0.5" }} />
                            </Tooltip>
                          </Grid>
                        </Grid>
                      }
                      title={item.user.studentID}
                      subheader={moment(item.createdAt).format("MMMM DD, YYYY")}
                    />
                    <CardContent>
                      <Typography sx={{ fontSize: 18 }}>
                        {item.question}
                      </Typography>
                    </CardContent>
                  </Card>
                </NavLink>
              </div>
            ))}
          </Slider>
        </Grid>
      )}
    </Fragment>
  );
}

export default pollsCarousel;
