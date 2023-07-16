const ErrorResponse = require('../utils/errorResponse');

const errorHandler = (err, req, res, next) => {
    let error = err;

    error.message = err.message;
    //log to console for developer
    // console.log(err.stack.red);
    /* IMPORTANT
        If you ever want to test for error conditon log error like below
        to see what comes in the error object
    */
    // console.log("MIDDLEWARE ERROR: ", err);
    // console.log(Object.keys(err));
    // console.log("MIDDLEWARE ERROR NAME: ", err.name);
    // console.log("MIDDLEWARE ERROR MESSAGE: ", err.message);



    // Mongoose bad objectId
    //console.log(err.name);
    if (err.name === 'CastError') {
        const message = `Resource not found`;
        error = new ErrorResponse(message, 404);
    }

    // mongoose duplicate key
    if(err.code === 11000) {
        const message = "An account with the provided information already exists";
        error = new ErrorResponse(message, 400)
    }

    // mongoose validation error
    if (err.name === 'ValidationError') {
        const message = Object.values(err.errors).map(val => val.message);
        error = new ErrorResponse(message, 400);
    }

    // JSONwebtoken invalid signature
    if (err.name === 'JsonWebTokenError') {
        const message = "Something went wrong"
        error = new ErrorResponse(message, 400);
    }

    res.status(error.statusCode || 500).json({
        success: false,
        error: error.message || 'Server Error'
    });
}

module.exports = errorHandler;