// Express Package
const express = require("express");


// Import Controller Functions
const  {
    register,
    login
} = require("../controllers/authenticate");


const router = express.Router();

// Register Route
router.route("/register").post(register);
// Login Route
router.route("/login").post(login);



module.exports = router;