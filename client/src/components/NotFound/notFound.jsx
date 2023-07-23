import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom"; // Replace with your preferred routing library if needed
import Image from "../../imgs/404Error.svg";

const NotFoundPage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <img
        src={Image} // Replace this with your own illustration URL
        alt="404 Not Found"
        style={{ width: "300px", height: "300px", marginBottom: 16 }}
      />
      <Typography variant="h4" component="h1" gutterBottom>
        Oops! Page not found.
      </Typography>
      <Typography variant="body1" gutterBottom>
        The page you are looking for might have been removed or does not exist.
      </Typography>
      <Button
        component={Link}
        to="/dashboard"
        variant="contained"
        color="primary"
        size="large"
        style={{ marginTop: 16 }}
      >
        Go back to homepage
      </Button>
    </Box>
  );
};

export default NotFoundPage;
