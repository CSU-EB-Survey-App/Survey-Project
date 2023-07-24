import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import { Box, Typography, Button } from "@mui/material";
import Loading from "../Loading/loading";

function AccountPage() {
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        let token = localStorage.getItem("token");
        const user = await axios.post(
          "https://pioneerpolls-da615733ad68.herokuapp.com/api/v1/auth/user",
          {
            token,
          }
        );
        // console.log("USER: ", user);
        setUser({ ...user.data.user });
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    };
    fetchUser();
  }, []);

  const deleteAccountHandler = async () => {
    try {
      let id = localStorage.getItem("token");
      console.log("id", id);
      let request = await axios.delete(
        `https://pioneerpolls-da615733ad68.herokuapp.com/api/v1/auth/delete/${id}`
      );
      console.log(request);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
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
          <div className="Poll">
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
                Account Information
              </Typography>

              <Typography>Account ID: {user.studentID}</Typography>

              <Typography>User E-mail: {user.email}</Typography>

              <Typography>Number of Ratings: {user.ratings.length}</Typography>

              <Typography>Number of Polls: {user.polls.length}</Typography>

              <Typography>
                Account Created On:{" "}
                {moment(user.createdAt).format("MMMM DD, YYYY")}
              </Typography>
              <Button
                variant="contained"
                color="error"
                onClick={deleteAccountHandler}
                padding={3}
              >
                Delete Account
              </Button>
            </Box>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
}

export default AccountPage;
