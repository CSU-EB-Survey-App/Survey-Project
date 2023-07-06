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
    // code here
    console.log("AUTH ROUTE RAN");
    console.log(req.body);

    let data = {
        studentID: req.body.studentID,
        email: req.body.email,
        password: req.body.password
    };

    const user = await User.create(data);

    res.status(200).json({
        success: true
    })

});

// @desc  Login user with provided information
// @route POST /api/v1/auth/login
exports.login = asyncHandler(async (req, res, next) => {
    
});

// @desc  Check if user is authenticated
// @route POST /api/v1/auth/isAuth
exports.isAuthenticated = asyncHandler(async (req, res, next) => {
    
});

// @desc  Delete user account 
// @route POST /api/v1/auth/delete
exports.deleteAccount = asyncHandler(async (req, res, next) => {
    
});