// Express Package
const express = require("express");


// Import Controller Functions
const  {
    getRatings,
    createRating,
    usefulRating,
    deleteRating
} = require("../controllers/rate");


const router = express.Router();

// Get all ratings
router.route("/").get(getRatings);

// Create a rating
router.route("/").post(createRating);

// Vote for usefulness
router.route("/useful/:id").put(usefulRating);

// Delete rating
router.route("/:id").delete(deleteRating);


module.exports = router;