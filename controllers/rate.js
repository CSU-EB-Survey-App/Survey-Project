



// @desc  this controller will fetch all of the ratings tied to a poll
// @route GET /api/v1/rating/
exports.getRatings = asyncHandler(async (req, res, next) => {
}); 


// @desc  this controller will create a rating and tie it to a poll
// @route POST /api/v1/rating/
exports.createRating = asyncHandler(async (req, res, next) => {
    
});


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