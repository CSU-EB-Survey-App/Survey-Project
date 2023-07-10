const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');

const UserSchema = new mongoose.Schema({
    studentID: {
        type: String,
        require: [true, 'Please provide a student ID'],
        unique: true,
      },
    email: {
        type: String,
        require: [true, "Please provide an email"],
        unique: true,
        match: [
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            'Please add a valid email'
          ]
    },
    password: {
        type: String,
        require: [true, 'Please add a password'],
        minlength: 6,
        select: false
    },
    resetPasswordToken: String,
    resetPasswordExpire: Date,
    createdAt: {
        type: Date,
        default: Date.now
    }
},{
    toJSON: { virtuals: true },
    toObject: { virtuals : true }
});

// We can encrypt the users password with mongoose pre save middleware
// Encrypt password using bcrypt
UserSchema.pre('save', async function(next) {
    if (!this.isModified('password')) {
        next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt)
});


// Sign JWT and return method for User model
UserSchema.methods.getSignedJwtToken = function() {
    return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRE
    })
}

// Match user entered password to hashed password in database
UserSchema.methods.matchPassword = async function(enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password)
}

// Generate and hash password token
UserSchema.methods.getResetPasswordToken = function() {
    // Generate Token
    const resetToken = crypto.randomBytes(20).toString('hex');

    // Hash the token and set to resetPasswordToken field
    this.resetPasswordToken = crypto
        .createHash('sha256')
        .update(resetToken)
        .digest('hex');

    // Set expire field
    this.resetPasswordExpire = Date.now() + 10 * 60 * 1000;

    return resetToken;
}

// Reverse populate with virtuals for ratings
UserSchema.virtual("ratings", {
    ref: "Rating",
    localField: '_id',
    foreignField: 'user',
    justOne: false
});

// Reverse populate with virtuals for polls
UserSchema.virtual("polls", {
    ref: "Poll",
    localField: '_id',
    foreignField: 'user',
    justOne: false
})


module.exports = mongoose.model('User', UserSchema);