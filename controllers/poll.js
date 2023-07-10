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
        console.log("GETTING ALL POLLS");

        // Get all polls and created user from database
        const polls = await Polls.find({}).populate({
            path: "user",
            select: "studentID"
        });

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
    try {
        console.log("[GETTING A SINGLE POLL]");

        // Printing to terminal the query string
        console.log(req.params);

        // Get query string parameter
        let id = req.params.id;

        // Search database with id for rating
        const poll = await Polls.findById(id);

        // Check if the poll exists
        if (!poll) {
            return next(new ErrorResponse(`Sorry, that poll does not exist.`), 401);
        }

        // Send response to client
        res.status(200).json({
            success: true,
            poll
        })
    } catch(err) {
        // Output error to terminal
        console.log("ERROR: ", err);

        // Forward error to client
        next(err);
    }
});

// @desc  Create a new poll
// @route POST /api/v1/polls/
exports.createPoll = asyncHandler(async (req, res, next) => {
    try {
        console.log("CREATING POLL");

        // Output request body to terminal
        console.log("REQUEST BODY: ", req.body);

        // Grab data from request body
        const { question, answer1, answer2, answer3, startDate, endDate, user } = req.body;

        // Format data to prepare for database
        let data = {
            question,
            answer1,
            answer2,
            answer3,
            startDate,
            endDate,
            user
        }

        // Output data to terminal
        console.log("DATA: ", data);

        // // Create database entry with data
        let poll = await Polls.create(data);

        // Output newly created database entry
        console.log(poll);

        res.status(200).json({
            success: true,
            poll
        })

    } catch(err) {
        // Print error to terminal
        console.log("ERROR: ", err);

        // Forward error to client
        next(err);
    }
});

// @desc  this controller will delete a poll
// @route DELETE /api/v1/polls/:id
exports.deletePoll = asyncHandler(async (req, res, next) => {
    try {  
        console.log("DELETING POLL");

        // Output query string to terminal
        console.log("QUERY STRING", req.params);

        // Grab the poll id from the query string
        let id = req.params.id;

        // Check database for poll with id
        let poll = await Polls.findById(id);

        if (!poll) {
            return next(new ErrorResponse(`Sorry, we cannot delete that poll.`), 401);
        }

        // Poll to delete
        console.log("[DELETING THIS POLL]: ", poll);

        // Remove poll
        await poll.deleteOne();

        // Send reponse back to client
        res.status(200).json({
            success: true,
            poll
        })

    } catch(err) {
         // Print error to terminal
         console.log("ERROR: ", err);

         // Forward error to client
         next(err);
    }
});

/*
 question:{
        type: String
    },
    answer1: {
        type: String
    },
    answer2: {
        type: String
    },
    answer3: {
        type: String
    },
    answer1Count: {
        type: Number,
        default: 0
    },
    answer2Count: {
        type: Number,
        default: 0
    },
    answer3Count: {
        type: Number,
        default: 0
    },
    startDate: {
        type: Date
    },
    endDate: {
        type: Date
    },
    usefulCount: {
        type: Number,
        default: 0
    },
    usefulVotes: {
        type: Array
    },
    voters: {
        type: Array
    },
    createdAt: {
        type: Date,
        default: new Date()
    },
    user: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true
    }

*/

// @desc  this controller will allow a user to answer a poll
// @route PUT /api/v1/answer/:id
exports.answerPoll = asyncHandler(async (req, res, next) => {
    
});

// @desc  this controller will allow a user to rate or flag a poll as "useful"
// @route PUT /api/v1/useful/:id
exports.usefulVote = asyncHandler(async (req, res, next) => {
    
});
