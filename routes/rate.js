// Express Package
const express = require("express");


// Import Controller Functions
const  {
    getRatings,
    createRating,
} = require("../controllers/rate");


const router = express.Router();

// Get all ratings
router.route("/").get(getRatings);

// Create a rating
router.route("/").post(createRating);



module.exports = router;