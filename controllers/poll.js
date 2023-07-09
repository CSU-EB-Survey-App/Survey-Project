// -IMPORTS-
const Polls = require("../models/Poll");


// -Controllers-

// @desc  Get all polls
// @route GET /api/v1/polls/
exports.getPolls = asyncHandler(async (req, res, next) => {
    try {
        console.log("GETTING ALL POLLS");

        // Get all polls and created user from database
        const polls = await Polls.find({}).populate({
            path: "user",
            select: "studentID"
        });

        console.log("This is a test of branching");
        console.log("This is a test of branching for Marc");
        console.log("This is a test of branching for khalil");
        // Send to client
        res.status(200).json({
            success: true,
            polls
        })

    } catch (err) {
        // Print error to terminal
        console.log("ERROR: ", err);

        // Forward error to client
        next(err);
    }



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