// Package Imports
import { Fragment } from 'react';

// import "./home.css"


// Material UI Imports
import { Grid, Box } from '@mui/material';

//  Images
import Image from '../../imgs/EastBay.png'

// Components
import Login from "../Login/login"
import Footer from "../Footer/footer"

const Styles = {
  bannerContainer: {
    width: "100%",
    height: "250px"
  },
  banner: {
    width: "100%",
    height: "350px",
    borderRadius: "60px",
    paddingRight: "5px",
    paddingLeft: "5px",
    paddingTop: "20px"
  },
  loginGrid: {
    margin: "auto"
  }
}



function Home() {
  
  return (
    <Fragment>
      {/* Grid setup */}
        <Box>
          <Grid container rowSpacing={1}>
            <Grid item xs={12}>
              <div className='banner' style={Styles.bannerContainer}>
                <img src={Image} alt='Campus' style={Styles.banner}/>
              </div>
            </Grid>
            <Grid item xs={6} style={Styles.loginGrid}>
              <Login />
            </Grid>
          </Grid>
        </Box>
        <Footer/>
    </Fragment>
  );
}



export default Home;
