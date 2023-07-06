// Express Package
const express = require("express");


// Import Controller Functions
const  {
    register,
} = require("../controllers/authenticate");


const router = express.Router();


router.route("/register").post(register);


module.exports = router;