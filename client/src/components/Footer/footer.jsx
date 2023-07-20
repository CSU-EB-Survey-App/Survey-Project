import * as React from "react";

import { GitHub } from "@mui/icons-material";
import { Box, Grid, Link, Container, Typography } from "@mui/material";

const Styles = {
  footerContainer: {
    position: "fixed",
    left: "0",
    bottom: "0",
    width: "100%",
  },
};

export default function Footer() {
  return (
    <Box
      // style={Styles.footerContainer}
      style={Styles.footerContainer}
      component="footer"
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === "light"
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
        p: 2,
        mt: 10,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              About Us
            </Typography>
            <Typography variant="body2" color="text.secondary">
              We are the PioneerPolls company, dedicated to providing the best
              polling service ever.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Email: csueb401surveygroup@gmail.com
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Follow Us
            </Typography>
            <Link
              href="https://github.com/CSU-EB-Survey-App/Survey-Project"
              color="inherit"
              sx={{ pl: 1, pr: 1 }}
            >
              <GitHub />
            </Link>
          </Grid>
        </Grid>
        <Box mt={1}>
          <Typography variant="body2" color="text.secondary" align="center">
            {"Copyright © "}
            <Link color="inherit" href="https://your-website.com/">
              PioneerPolls
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
