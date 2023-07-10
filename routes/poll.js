// Express Package
const express = require("express");

const  {
    getPolls,
    getPoll,
    createPoll,
    deletePoll,
    answerPoll,
    usefulVote,
} = require("../controllers/poll");

const router = express.Router();

// getPolls Route
router.route("/").get(getPolls);

// getPoll Route
router.route("/:id").get(getPoll);

// poll creation Route
router.route("/").post(createPoll);

//deleting poll Route
router.route("/:id").delete(deletePoll);

// // poll answer Route
// router.route("/").post(answerPoll);

// useful poll Route
router.route("/useful/:id").put(usefulVote);



module.exports = router;