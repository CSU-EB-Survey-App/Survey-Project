const mongoose = require("mongoose");

const RatingSchema = new mongoose.Schema({
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
    usefulVoters: {
        type: Array
    },
    voters: {
        type: Array
    },
    active: {
        type: Boolean,
        default: false
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

})

module.exports = mongoose.model('Rating', RatingSchema);