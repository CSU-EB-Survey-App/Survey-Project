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
  bannerText: {
    marginTop: "40px",
  },
};

const UserPosts = () => {
  const [user, setUser] = useState();

  useEffect(() => {
    const fetchUser = async () => {
      let token = localStorage.getItem("token");
      const user = await axios.post("http://localhost:8080/api/v1/auth/user", {
        token,
      });
      console.log("USER POLLS: ", user);
      setUser({ ...user.data.user });
    };
    fetchUser();
  }, []);
  return (
    <Fragment>
      {!user ? null : (
        <Fragment>
          <div>
            <Typography variant="h5" align="center" style={Styles.bannerText}>
              My Popular Posts
            </Typography>
          </div>
          <Grid container spacing={2} style={Styles.gridContainer}>
            <Grid xs={3}>
              <NavLink
                // to={`/poll/${popularPolls[0]._id}`}
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
                          {/* {popularPolls[0].useful} */}
                        </Grid>
                        <Grid item>
                          <StarOutlineIcon style={{ opacity: "0.5" }} />
                        </Grid>
                      </Grid>
                    }
                    // subheader={moment(popularPolls[0].createdAt).format(
                    //   "MMMM DD, YYYY"
                    // )}
                  />
                  <CardContent>
                    <Typography sx={{ fontSize: 18 }}>
                      {/* {popularPolls[0].question} */}
                    </Typography>
                  </CardContent>
                </Card>
              </NavLink>
            </Grid>
          </Grid>
        </Fragment>
      )}
    </Fragment>
  );
};

// function userPosts() {

//   useEffect(() => {
//     const fetchUser = async () => {
//       let token = localStorage.getItem("token");
//       const user = await axios.post("http://localhost:8080/api/v1/auth/user", {
//         token,
//       });
//       console.log("USER: ", user);
//       // setUser({ ...user.data.user });
//       // props.handleuser(user.data.user);
//     };

//     fetchUser();
//   }, []);

//   // console.log("USER", user);

//   // const popularPolls = user.polls.sort((a, b) => b.useful - a.useful);
//   // const popularRatings = user.ratings.sort((a, b) => b.useful - a.useful);
//   return (
//     <Fragment></Fragment>
//     // <Fragment>
//     //   <div>
//     //     <Typography variant="h5" align="center" style={Styles.bannerText}>
//     //       My Popular Posts
//     //     </Typography>
//     //   </div>
//     //   <div className="gridContainer">
//     //     <Grid container spacing={2} style={Styles.gridContainer}>
//     //       <Grid item xs={3}>
//     //         <NavLink
//     //           to={`/poll/${popularPolls[0]._id}`}
//     //           style={{ textDecoration: "none", userSelect: "none" }}
//     //         >
//     //           <Card
//     //             sx={{ minWidth: 200, minHeight: 200 }}
//     //             style={{ margin: "10px" }}
//     //           >
//     //             <CardHeader
//     //               action={
//     //                 <Grid container direction="row" alignItems="center">
//     //                   <Grid item style={{ paddingBottom: "5px" }}>
//     //                     {popularPolls[0].useful}
//     //                   </Grid>
//     //                   <Grid item>
//     //                     <StarOutlineIcon style={{ opacity: "0.5" }} />
//     //                   </Grid>
//     //                 </Grid>
//     //               }
//     //               subheader={moment(popularPolls[0].createdAt).format(
//     //                 "MMMM DD, YYYY"
//     //               )}
//     //             />
//     //             <CardContent>
//     //               <Typography sx={{ fontSize: 18 }}>
//     //                 {popularPolls[0].question}
//     //               </Typography>
//     //             </CardContent>
//     //           </Card>
//     //         </NavLink>
//     //       </Grid>
//     //       <Grid item xs={3}>
//     //         <NavLink
//     //           to={`/poll/${popularPolls[1]._id}`}
//     //           style={{ textDecoration: "none", userSelect: "none" }}
//     //         >
//     //           <Card
//     //             sx={{ minWidth: 200, minHeight: 200 }}
//     //             style={{ margin: "10px" }}
//     //           >
//     //             <CardHeader
//     //               action={
//     //                 <Grid container direction="row" alignItems="center">
//     //                   <Grid item style={{ paddingBottom: "5px" }}>
//     //                     {popularPolls[1].useful}
//     //                   </Grid>
//     //                   <Grid item>
//     //                     <StarOutlineIcon style={{ opacity: "0.5" }} />
//     //                   </Grid>
//     //                 </Grid>
//     //               }
//     //               subheader={moment(popularPolls[1].createdAt).format(
//     //                 "MMMM DD, YYYY"
//     //               )}
//     //             />
//     //             <CardContent>
//     //               <Typography sx={{ fontSize: 18 }}>
//     //                 {popularPolls[1].question}
//     //               </Typography>
//     //             </CardContent>
//     //           </Card>
//     //         </NavLink>
//     //       </Grid>
//     //       <Grid item xs={3}>
//     //         <NavLink
//     //           to={`/rating/${popularRatings[0]._id}`}
//     //           style={{ textDecoration: "none", userSelect: "none" }}
//     //         >
//     //           <Card
//     //             sx={{ minWidth: 200, minHeight: 200 }}
//     //             style={{ margin: "10px" }}
//     //           >
//     //             <CardHeader
//     //               action={
//     //                 <Grid container direction="row" alignItems="center">
//     //                   <Grid item style={{ paddingBottom: "5px" }}>
//     //                     {popularRatings[0].useful}
//     //                   </Grid>
//     //                   <Grid item>
//     //                     <StarOutlineIcon style={{ opacity: "0.5" }} />
//     //                   </Grid>
//     //                 </Grid>
//     //               }
//     //               subheader={moment(popularRatings[0].createdAt).format(
//     //                 "MMMM DD, YYYY"
//     //               )}
//     //             />
//     //             <CardContent>
//     //               <Typography sx={{ fontSize: 18 }}>
//     //                 {popularRatings[0].question}
//     //               </Typography>
//     //             </CardContent>
//     //           </Card>
//     //         </NavLink>
//     //       </Grid>
//     //       <Grid item xs={3}>
//     //         <NavLink
//     //           to={`/rating/${popularRatings[1]._id}`}
//     //           style={{ textDecoration: "none", userSelect: "none" }}
//     //         >
//     //           <Card
//     //             sx={{ minWidth: 200, minHeight: 200 }}
//     //             style={{ margin: "10px" }}
//     //           >
//     //             <CardHeader
//     //               action={
//     //                 <Grid container direction="row" alignItems="center">
//     //                   <Grid item style={{ paddingBottom: "5px" }}>
//     //                     {popularRatings[1].useful}
//     //                   </Grid>
//     //                   <Grid item>
//     //                     <StarOutlineIcon style={{ opacity: "0.5" }} />
//     //                   </Grid>
//     //                 </Grid>
//     //               }
//     //               subheader={moment(popularRatings[1].createdAt).format(
//     //                 "MMMM DD, YYYY"
//     //               )}
//     //             />
//     //             <CardContent>
//     //               <Typography sx={{ fontSize: 18 }}>
//     //                 {popularRatings[1].question}
//     //               </Typography>
//     //             </CardContent>
//     //           </Card>
//     //         </NavLink>
//     //       </Grid>
//     //     </Grid>
//     //   </div>
//     // </Fragment>
//   );
// }

export default UserPosts;
