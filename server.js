// -IMPORTED PACKAGES-
// Nodejs server package
const express = require("express");
// Cors (Cross Origin Resource Sharing for Internet Messaging)
const Cors = require("cors");
// Environment Variables
const dotenv = require("dotenv");


// -IMPORTED FUNCTIONS-
// Import Database connection function
const connectDB = require("./config/dbConfig");



// Load environment variables
dotenv.config({ path: './config/config.env' });


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


// Import Routes
const authenticate = require("./routes/authenticate");


// Implement Routes into app
app.use("/api/v1/auth", authenticate);


// Example of a Route
app.get("/", (req, res) => {
    res.send("Server Is Good");
});




// Start Server
app.listen(PORT, () => {
    console.log("Server is Running");
})

