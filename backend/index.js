/* eslint-disable no-undef */
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const task = require("./routes/task");
const PORT = process.env.PORT || 2222;
const DATABASE = process.env.DATABASE;

const app = express();

app.use(cors());
app.use(express.json());

//Routes
app.use("/api", task);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Connect to mongoDB
const connectToDB = async () => {
  try {
    mongoose.connect(DATABASE);
    console.log("Database Connected");
  } catch (err) {
    console.log("Could not connect to MongoDB");
    console.log(err);
    process.exit(1);
  }
};

connectToDB();
