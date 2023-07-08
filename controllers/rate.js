// Import Rating model
const Ratings = require("../models/Rating");
// Import Async Handler
const asyncHandler = require("../middleware/async");
// Error handler
const ErrorResponse = require("../utils/errorResponse");



// @desc  this controller will fetch all of the ratings tied to a poll
// @route GET /api/v1/rating/
exports.getRatings = asyncHandler(async (req, res, next) => {
    try {
        console.log("GETTING ALL RATINGS");

        // Get all ratings from database
        const ratings = await Ratings.find({});

        // Send to client
        res.status(200).json({
            success: true,
            ratings
        })

    } catch (err) {
        // Print error to terminal
        console.log("ERROR: ", err);

        // Forward error to client
        next(err);
    }

}); 


// @desc  this controller will create a rating and tie it to a poll
// @route POST /api/v1/rating/
exports.createRating = asyncHandler(async (req, res, next) => {
    try {
        console.log("CREATING A RATING");

        // Print request body to terminal
        console.log("REQUEST BODY: ", req.body);

        // Grab request body values
        const { question, startDate, endDate, user } = req.body;

        // Prepare and format data
        const data = {
            question,
            startDate,
            endDate,
            user
        }

        // Print data to terminal
        console.log("DATA: ", data);

        // Creat rating in database
        const rate = await Ratings.create(data);

        // Send response back to client
        res.status(200).json({
            success: true,
            rate
        })
    } catch(err) {
        // Print error to terminal
        console.log(err);

        // Forward error to client
        next(err);
    }
});

/*
 question: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        default: 0
    },
    useful: {
        type: Number,
        default: 0
    },
    voters: {
        type: Array
    },
    startDate: {
        type: Date,
    },
    endDate: {
        type: Date,
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




// @desc  this controller will fetch a rating associated with a poll
// @route GET /api/v1/rating/:id
exports.getRating = asyncHandler(async (req, res, next) => {
    
});

// @desc  this controller will delete a rating associated with a poll
// @route DELETE /api/v1/rating/
exports.deleteRating = asyncHandler(async (req, res, next) => {
    
});

// @desc  this controller will vote on a rating associated with a poll
// @route PUT /api/v1/rating/vote/:id
exports.voteRating = asyncHandler(async (req, res, next) => {
    
});

// @desc  this controller will mark the rating useful
// @route DELETE /api/v1/rating/useful/:id
exports.usefulRating = asyncHandler(async (req, res, next) => {
    
});