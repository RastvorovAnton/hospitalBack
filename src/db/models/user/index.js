const mongoose = require("mongoose");
const env = require('dotenv').config()

let a = process.env.VARIABLE

const { Schema, model } = mongoose;

const userSchema = new Schema({
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

module.exports = User = mongoose.model("users", userSchema);