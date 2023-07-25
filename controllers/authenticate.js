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
    // console.log("RUNNING REGISTER");
    // Output req body to terminal
    // console.log("INCOMING RESPONSE BODY:", req.body);
    // Grab data from req.body
    const { studentID, email, password } = req.body;

    // If student id and password are empty throw error
    if (!studentID || !password || !email) {
      return next(
        new ErrorResponse(
          "Please provide a student id, email, and password",
          400
        )
      );
    }

    // Format student id and email for consistency
    let formattedID = studentID.toUpperCase();
    let formattedEmail = email.toLowerCase();

    // Create user in database
    user = await User.create({
      studentID: formattedID,
      email: formattedEmail,
      password,
    });

    // Output newly created user in database
    // console.log("USER CREATED IN DB: ", user);

    // Generate token for authentication
    const token = user.getSignedJwtToken();

    // Output authentication token
    // console.log("AUTHENTICATION TOKEN: ", token);

    // Send response back to client with user token for authentication
    res.status(200).json({
      success: true,
      token,
    });
  } catch (err) {
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
    // console.log("RUNNING LOGIN");
    // Output request body to terminal
    // console.log(req.body);

    // Grab data from request body
    const { studentID, password } = req.body;

    // If student id and password are empty throw error
    if (!studentID || !password) {
      return next(
        new ErrorResponse("Please provide a student id and password", 400)
      );
    }

    // Format student id
    let formattedID = studentID.toUpperCase();

    // Check database for user
    const user = await User.findOne({ studentID: formattedID }).select(
      "+password"
    );

    // Output user to terminal
    // console.log("DATABASE USER: ", user);

    // Throw error if there is no user
    if (!user) {
      return next(new ErrorResponse("Invalid credentials", 401));
    }

    // check if passwords match
    const isMatch = await user.matchPassword(password);

    if (!isMatch) {
      return next(new ErrorResponse("Invalid credentials", 401));
    }

    // Get authentication token
    const token = user.getSignedJwtToken();

    res.status(200).json({
      success: true,
      token,
    });
  } catch (err) {
    // Output error to terminal
    // console.log("ERROR: ", err);

    // Send error to client
    next(err);
  }
});

// @desc  Check if user is authenticated
// @route POST /api/v1/auth/isauth
exports.isAuthenticated = asyncHandler(async (req, res, next) => {
  try {
    // console.log("CHECKING AUTHENTICATION");

    // Output request body to terminal
    // console.log(req.body);

    // Grab data from request body
    const { token } = req.body;

    // Decode token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Output to terminal decoded authentication token
    // console.log("AUTHENTICATION TOKEN: ", decoded);

    // Check database for user
    let user = await User.findById(decoded.id);

    // Output database user to terminal
    // console.log("USER: ", user);

    // If ther is no user throw error
    if (!user) {
      return next(new ErrorResponse("User profile is not authenticated", 400));
    }

    res.status(200).json({
      success: true,
      user,
    });
  } catch (err) {
    // Output error to terminal
    // console.log("ERROR: ", err);

    // Send error to client
    next(err);
  }
});

// @desc  Delete user account
// @route POST /api/v1/auth/delete
exports.deleteAccount = asyncHandler(async (req, res, next) => {
  try {
    // console.log("DELETING ACCOUNT");

    // Output request body to terminal
    // console.log(req.params.id);

    // Grab data from request body
    const { id } = req.params;

    // // Decode token
    const decoded = jwt.verify(id, process.env.JWT_SECRET);

    // // Output to terminal decoded authentication token
    // console.log("AUTHENTICATION TOKEN: ", decoded);

    // // Check database for user
    let user = await User.findById(decoded.id);

    // // Output database user to terminal
    // // console.log("USER: ", user);

    // // If ther is no user throw error
    if (!user) {
      return next(new ErrorResponse("User profile does not exist", 400));
    }

    user = await User.findByIdAndDelete(decoded.id);

    res.status(200).json({
      success: true,
      user,
    });
  } catch (err) {
    // Output error to terminal
    // console.log("ERROR: ", err);

    // Send error to client
    next(err);
  }
});

// @desc  Get user account with all ratings and polls
// @route POST /api/v1/auth/user/
exports.getUser = asyncHandler(async (req, res, next) => {
  try {
    // console.log("GETTING USER INFORMATION");

    // Output request body to terminal
    // console.log(req.body);

    // Grab data from request body
    const { token } = req.body;

    // Decode token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Output to terminal decoded authentication token
    // console.log("AUTHENTICATION TOKEN: ", decoded);

    // Get user info and all created items
    let user = await User.findById(decoded.id)
      .populate("ratings")
      .populate("polls");

    // If ther is no user throw error
    if (!user) {
      return next(new ErrorResponse("User profile does not exist", 400));
    }

    // Output database user to terminal
    // console.log("USER: ", user);

    // Set Cache-Control header to cache the response for 1 day (86400 seconds)
    res.setHeader("Cache-Control", "public, max-age=86400");

    res.status(200).json({
      success: true,
      user,
    });
  } catch (err) {
    // Output error to terminal
    // console.log("ERROR: ", err);

    // Send error to client
    next(err);
  }
});
