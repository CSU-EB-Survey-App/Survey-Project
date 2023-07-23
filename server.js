// -IMPORTED PACKAGES-
// Nodejs server package
const express = require("express");
// Cors (Cross Origin Resource Sharing for Internet Messaging)
const Cors = require("cors");
// Environment Variables
const dotenv = require("dotenv");
// Error Handler
const errorHandler = require("./middleware/error");

// -IMPORTED FUNCTIONS-
// Import Database connection function
const connectDB = require("./configDB/db");

// Load environment variables
// dotenv.config({ path: "./config/config.env" });

// Port for server to listen on
const PORT = process.env.PORT || 8080;
// const PORT = 8080;

// Initialize Server
const app = express();

// Tell app to use JSON text format
app.use(express.json());

// Tell app to use cors package
app.use(Cors());

// Connect Database to Appliction
connectDB();

// Import Routes
const authenticate = require("./routes/authenticate");
const rating = require("./routes/rate");
const polls = require("./routes/poll");

// Implement Routes into app
app.use("/api/v1/auth", authenticate);
app.use("/api/v1/ratings", rating);
app.use("/api/v1/polls", polls);

// Configure Error Dection Middleware
app.use(errorHandler);

// Example of a Route
app.get("/", (req, res) => {
  res.send("Server Is Good");
});

if (process.env.NODE_ENV === "production") {
  // Express will serve production assets
  // like our main.js file, or main.css file
  app.use(express.static("client/build"));
  // Express will serve up the index.html file
  // if it doesent recognize the route
  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

// Start Server For Production
app.listen(PORT, () => {
  console.log("Server is Running");
});

// // Start Server For Development and Unit Testing
// if (require.main === module) {
//     const port = process.env.PORT || 8080;
//     app.listen(port, () => {
//       console.log(`Server listening on port ${port}`);
//     });
// }

module.exports = app;
