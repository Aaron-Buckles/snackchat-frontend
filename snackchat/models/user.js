const mongoose = require("mongoose");
var uniqueValidator = require("mongoose-unique-validator");
const Joi = require("@hapi/joi");

const User = mongoose.model(
  "User",
  new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
  }).plugin(uniqueValidator)
);

module.exports.User = User;
