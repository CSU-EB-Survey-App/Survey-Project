const mongoose = require("mongoose");

const PollSchema = new mongoose.Schema({
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
    active: {
        Type: Boolean,
        default: false
    },
    startDate: {
        type: Date
    },
    endDate: {
        type: Date
    },
    useful: {
        type: Number,
        default: 0
    },
    usefulVoters: {
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
})

module.exports = mongoose.model('Poll', PollSchema);