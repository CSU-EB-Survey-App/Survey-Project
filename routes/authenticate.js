// Express Package
const express = require("express");


// Import Controller Functions
const  {
    register,
    login,
    isAuthenticated,
    getUser,
    deleteAccount
} = require("../controllers/authenticate");


const router = express.Router();

// Register Route
router.route("/register").post(register);
// Login Route
router.route("/login").post(login);
// Is Authenticated Route
router.route("/isauth").post(isAuthenticated);
// Get user account details
router.route("/user").get(getUser);
// Delete User Account
router.route("/delete").post(deleteAccount);



module.exports = router;