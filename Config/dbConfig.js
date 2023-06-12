const mongoose = require("mongoose");

const dev = "mongodb+srv://csueb401surveygroup:UtplabC2G0OEZkZP@cluster0.2gy9cdf.mongodb.net/"

const connectDB = async () => {
    const conn = await mongoose.connect(dev, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
  
    console.log(`MongoDB Connected`);
  };
  
  module.exports = connectDB;