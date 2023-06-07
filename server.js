// Nodejs server package
const express = require("express");
// Cors (Cross Origin Resource Sharing for Internet Messaging)
const cors = require("cors");

// Port for server to listen on
const PORT = process.env.PORT || 8080;

// Initialize Server
const app = express();


// Tell app to use JSON text format
app.use(express.json());

// Tell app to use cors package
app.use(cors());


// Routes
app.get("/", (req, res) => {
    res.send("Server Up and Running");
  });


// Start Server
app.listen(PORT, () => {
    console.log("Server is Running");
})