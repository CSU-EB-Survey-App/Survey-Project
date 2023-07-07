// Express Package
const express = require("express");


// Import Controller Functions
const  {
    register,
    login,
    isAuthenticated
} = require("../controllers/authenticate");


const router = express.Router();

// Register Route
router.route("/register").post(register);
// Login Route
router.route("/login").post(login);
// Is Authenticated Route
router.route("/isauth").post(isAuthenticated);




module.exports = router;