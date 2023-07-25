// -IMPORTS-
const Polls = require("../models/Poll");
// Asynchronous middleware
const asyncHandler = require("../middleware/async");
// Error handler
const ErrorResponse = require("../utils/errorResponse");

// -Controllers-

// @desc  Get all polls
// @route GET /api/v1/polls/
exports.getPolls = asyncHandler(async (req, res, next) => {
  try {
    // console.log("GETTING ALL POLLS");

    // Get all polls and created user from database
    const polls = await Polls.find({}).populate({
      path: "user",
      select: "studentID",
    });

    // Send to client
    res.status(200).json({
      success: true,
      polls,
    });
  } catch (err) {
    // Print error to terminal
    // console.log("ERROR: ", err);

    // Forward error to client
    next(err);
  }
});

// @desc  Get a single poll
// @route GET /api/v1/poll/:id
exports.getPoll = asyncHandler(async (req, res, next) => {
  try {
    // console.log("[GETTING A SINGLE POLL]");

    // Printing to terminal the query string
    // console.log(req.params);

    // Get query string parameter
    let id = req.params.id;

    // Search database with id for rating
    const poll = await Polls.findById(id);

    // Check if the poll exists
    if (!poll) {
      return next(new ErrorResponse(`Sorry, that poll does not exist.`, 404));
    }

    // Send response to client
    res.status(200).json({
      success: true,
      poll,
    });
  } catch (err) {
    // Output error to terminal
    // console.log("ERROR: ", err);

    // Forward error to client
    next(err);
  }
});

// @desc  Create a new poll
// @route POST /api/v1/polls/
exports.createPoll = asyncHandler(async (req, res, next) => {
  try {
    // console.log("CREATING POLL");

    // Output request body to terminal
    // console.log("REQUEST BODY: ", req.body);

    // Grab data from request body
    const { question, answer1, answer2, answer3, endDate, user } = req.body;

    // Check rating information exists
    if (!question || !endDate || !answer1 || !answer2 || !answer3) {
      return next(new ErrorResponse(`All fields are required.`, 401));
    }

    // Format data to prepare for database
    let data = {
      question,
      answer1,
      answer2,
      answer3,
      startDate: new Date(),
      endDate,
      user,
    };

    // Output data to terminal
    // console.log("DATA: ", data);

    // // Create database entry with data
    let poll = await Polls.create(data);

    // Output newly created database entry
    // console.log(poll);

    res.status(200).json({
      success: true,
      poll,
    });
  } catch (err) {
    // Print error to terminal
    // console.log("ERROR: ", err);

    // Forward error to client
    next(err);
  }
});

// @desc  this controller will delete a poll
// @route DELETE /api/v1/polls/:id
exports.deletePoll = asyncHandler(async (req, res, next) => {
  try {
    // console.log("DELETING POLL");

    // Output query string to terminal
    // console.log("QUERY STRING", req.params);

    // Grab the poll id from the query string
    let id = req.params.id;

    // Check database for poll with id
    let poll = await Polls.findById(id);

    if (!poll) {
      return next(new ErrorResponse(`Sorry, we cannot delete that poll.`, 401));
    }

    // Poll to delete
    // console.log("[DELETING THIS POLL]: ", poll);

    // Remove poll
    await poll.deleteOne();

    // Send reponse back to client
    res.status(200).json({
      success: true,
      poll,
    });
  } catch (err) {
    // Print error to terminal
    // console.log("ERROR: ", err);

    // Forward error to client
    next(err);
  }
});

// @desc  this controller will allow a user to answer a poll
// @route PUT /api/v1/polls/answer/:id
exports.answerPoll = asyncHandler(async (req, res, next) => {
  try {
    // console.log("ANSWERING POLL");

    // Output to terminal query string parameter
    // console.log("[REQUEST PARAMS ID]: ", req.params.id);

    // Get id from query string
    let id = req.params.id;

    // Output to terminal request body
    // console.log("[REQUEST BODY]: ", req.body);

    // Grab answer from request body
    let userAnswer = req.body.answer;
    // Grab voting users id
    let votingUser = req.body.user;

    // Find poll in database
    let poll = await Polls.findById(id);

    // If there is no poll throw error
    if (!poll) {
      return next(new ErrorResponse("Sorry, this poll does not exist", 400));
    }

    poll = await Polls.findByIdAndUpdate(
      id,
      { $inc: { [userAnswer]: 1 }, $push: { voters: votingUser } },
      { new: true }
    );

    // Output new db entry
    // console.log("[UPDATED POLL]: ", poll);

    res.status(200).json({
      success: true,
      poll,
    });
  } catch (err) {
    // Output error to terminal
    // console.log("ERROR: ", err);

    // Forward error to client
    next(err);
  }
});

// @desc  this controller will allow a user to rate or flag a poll as "useful"
// @route PUT /api/v1/polls/useful/:id
exports.usefulVote = asyncHandler(async (req, res, next) => {
  try {
    // console.log("INCREMENTING POLL USEFULNESS");

    // Output to terminal query string parameter
    // console.log(req.params.id);

    // Get id from query string
    let id = req.params.id;

    // Output to terminal request body
    // console.log(req.body);

    // Grab voting users id
    let votingUser = req.body.user;

    // Check database for rate before updating
    let poll = await Polls.findById(id);

    // If there is no poll throw error
    if (!poll) {
      return next(new ErrorResponse("Sorry, this poll does not exist", 400));
    }

    // Update poll to increment usefulness and add user to useful voters
    poll = await Polls.findByIdAndUpdate(
      id,
      { $inc: { useful: 1 }, $push: { usefulVoters: votingUser } },
      { new: true }
    );

    // Output new db entry
    // console.log("NEW POLL", poll);

    res.status(200).json({
      success: true,
      poll,
    });
  } catch (err) {
    // Output error to terminal
    // console.log("ERROR: ", err);

    // Forward error to client
    next(err);
  }
});
