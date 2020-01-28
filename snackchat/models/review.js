const mongoose = require("mongoose");
const Joi = require("@hapi/joi");

const Review = mongoose.model(
  "Review",
  new mongoose.Schema({
    title: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 50
    },
    description: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 500
    },
    starRating: {
      type: Number,
      min: 0,
      max: 5
    },
    likes: { type: Number, default: 0 }
  })
);

module.exports.Review = Review;
