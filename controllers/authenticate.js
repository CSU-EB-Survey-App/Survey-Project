// -IMPORTS-
// Import User Database Model
const User = require("../models/User");
// Import Error Response
const ErrorResponse = require("../utils/errorResponse");
// Import Async Handler
const asyncHandler = require("../middleware/async");
// Import JSON Web Token
const jwt = require("jsonwebtoken");
// Import Cryptography Package
const crypto = require("crypto");

// -Controllers-

// @desc  Register user with provided information
// @route POST /api/v1/auth/register
exports.register = asyncHandler(async (req, res, next) => {
    try {
        // Output req body to terminal
        console.log("INCOMING RESPONSE BODY:", req.body);
        // Grab data from req.body
        const { studentID, email, password } = req.body;

        // Format student id and email for consistency
        let formattedID = studentID.toUpperCase();
        let formattedEmail = email.toLowerCase();

        // Create user in database
        const user = await User.create({
            studentID: formattedID,
            email: formattedEmail,
            password
        })

        // Output newly created user in database
        console.log("USER CREATED IN DB: ", user);

        // Generate token for authentication
        const token = user.getSignedJwtToken();

        // Output authentication token
        console.log("AUTHENTICATION TOKEN: ", token);

        // Send response back to client with user token for authentication
        res.status(200).json({
            success: true,
            token
        })
        

    } catch(err) {
        // Output error for testing
        // console.log(err);

        // Send error to client
        next(err);
    }

});

// @desc  Login user with provided information
// @route POST /api/v1/auth/login
exports.login = asyncHandler(async (req, res, next) => {
    try {
        // Output request body to terminal
        console.log(req.body);

        // Grab data from request body
        const { studentID, password } = req.body;

        // If no student id

    } catch(err) {

    }
});

// @desc  Check if user is authenticated
// @route POST /api/v1/auth/isAuth
exports.isAuthenticated = asyncHandler(async (req, res, next) => {
    
});

// @desc  Delete user account 
// @route POST /api/v1/auth/delete
exports.deleteAccount = asyncHandler(async (req, res, next) => {
    
});