// -IMPORTS-
const Polls = require("../models/Poll");


// -Controllers-

// @desc  Get all polls
// @route GET /api/v1/polls/
exports.getPolls = asyncHandler(async (req, res, next) => {
    
});

// @desc  Get a single poll
// @route GET /api/v1/poll/:id
exports.getPoll = asyncHandler(async (req, res, next) => {
    
});



// @desc  Create a new poll
// @route POST /api/v1/polls/
exports.createPoll = asyncHandler(async (req, res, next) => {
    
});

// @desc  this controller will delete a poll
// @route DELETE /api/v1/polls/:id
exports.deletePoll = asyncHandler(async (req, res, next) => {
    
});

// @desc  this controller will allow a user to answer a poll
// @route PUT /api/v1/answer/:id
exports.answerPoll = asyncHandler(async (req, res, next) => {
    
});

// @desc  this controller will allow a user to rate or flag a poll as "useful"
// @route PUT /api/v1/useful/:id
exports.usefulVote = asyncHandler(async (req, res, next) => {
    
});