// Package Imports
import { Fragment, useEffect } from "react";

// import "./home.css"

// Material UI Imports
import { Grid, Box } from "@mui/material";

//  Images
import Image from "../../imgs/EastBay.png";

// Components
import Login from "../Login/login";
import Footer from "../Footer/footer";
import axios from "axios";
import { useNavigate } from "react-router";

const Styles = {
  bannerContainer: {
    width: "100%",
    height: "250px",
  },
  banner: {
    width: "100%",
    height: "350px",
    borderRadius: "60px",
    paddingRight: "5px",
    paddingLeft: "5px",
    paddingTop: "20px",
  },
  loginGrid: {
    margin: "auto",
  },
};

function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAuthentication = async () => {
      try {
        let token = localStorage.getItem("token");
        const request = await axios.post(
          "http://localhost:8080/api/v1/auth/isauth/",
          {
            token: token,
          }
        );
        console.log("ISAUTH REQUEST: ", request);
        if (request.data.success === true) {
          navigate("/dashboard");
        }
      } catch (err) {
        console.log(err);
      }
    };
    if (localStorage.getItem("token")) {
      fetchAuthentication();
    } else {
      return;
    }
  }, []);

  return (
    <Fragment>
      {/* Grid setup */}
      <Box>
        <Grid container rowSpacing={1}>
          <Grid item xs={12}>
            <div className="banner" style={Styles.bannerContainer}>
              <img src={Image} alt="Campus" style={Styles.banner} />
            </div>
          </Grid>
          <Grid item xs={6} style={Styles.loginGrid}>
            <Login />
          </Grid>
        </Grid>
      </Box>
      <Footer />
    </Fragment>
  );
}

export default Home;
