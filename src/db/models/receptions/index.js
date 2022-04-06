const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const receptionSchema = new Schema({
  userName: {
    type: String,
    required: true,
  },
  doctorName: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  complaint: {
    type: String,
    required: true,
  },
});

module.exports = Reception = mongoose.model(
  "receptions",
  receptionSchema
);