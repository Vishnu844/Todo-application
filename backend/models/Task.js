/* eslint-disable no-undef */
const mongoose = require("mongoose");

let taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  status:{
    type: String,
    default: "pending"
  },
  dueDate: {
    type: Date,
    required: true,
  },
});

module.exports = mongoose.model("task", taskSchema);
