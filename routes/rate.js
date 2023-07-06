// Express Package
const express = require("express");


// Import Controller Functions
const  {
    createRating,
} = require("../controllers/rate");


const router = express.Router();


router.route("/").post(createRating);


module.exports = router;