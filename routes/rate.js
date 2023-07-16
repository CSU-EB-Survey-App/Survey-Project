// Express Package
const express = require("express");


// Import Controller Functions
const  {
    getRatings,
    getRating,
    createRating,
    answerRating,
    usefulRating,
    deleteRating
} = require("../controllers/rate");


const router = express.Router();

// Get all ratings
router.route("/").get(getRatings);

router.route("/:id").get(getRating);

// Create a rating
router.route("/").post(createRating);

// Route for user rating vote
router.route("/answer/:id").put(answerRating);

// Vote for usefulness
router.route("/useful/:id").put(usefulRating);

// Delete rating
router.route("/:id").delete(deleteRating);


module.exports = router;