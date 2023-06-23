// Nodejs server package
const express = require("express");
// Cors (Cross Origin Resource Sharing for Internet Messaging)
const Cors = require("cors");
// Import Database connection function
const connectDB = require("./config/dbConfig");



// Port for server to listen on
const PORT = process.env.PORT || 8080;

// Initialize Server
const app = express();


// Tell app to use JSON text format
app.use(express.json());

// Tell app to use cors package
app.use(Cors());


// Connect Database to Appliction
connectDB();


// Example of a Route
app.get("/", (req, res) => {
    res.send("Server Is Good");
  });

  // Example of a Route
app.get("/test", (req, res) => {

  // Get some data from the DB
  let data = {
    name: "Stephen",
    class: "Senior"
  };

  res.status(200).json({
    success: true,
    data
  })
});


app.get("/create/form", (req, res) => {

  // console.log(req);

  // Get some data from the DB
  let data = {
    name: "Stephen",
    class: "Senior"
  };

  console.log("Hello World", data);

  res.status(200).json({
    success: true,
    data
  })
});

app.post("/create/user", (req, res) => {

  console.log(req.body);

  // Get some data from the DB
  let data = {
    user: req.body.user
  }
  console.log(data);

  res.status(200).json({
    success: true,
    data
  })
});




// Start Server
app.listen(PORT, () => {
    console.log("Server is Running");
})