const mongoose = require("mongoose");

const pollSchema = new mongoose.Schema({
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
    voters: {
        
    }
})