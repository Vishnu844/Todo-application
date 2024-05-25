/* eslint-disable no-undef */
const Task = require("../models/Task");

// controller to create a task
exports.create = async (req, res) => {
  try {
    const newTask = new Task({
      title: req.body.title,
      description: req.body.description,
      status: req.body.status,
      dueDate: req.body.dueDate,
    });
    await newTask.save();
    res.status(200).json({
      status: 1,
      message: "Successfully created a Task",
    });
  } catch (err) {
    res.status(200).json({
      status: 0,
      message: "Failed to create Task",
      error: err.message,
    });
  }
};

// controller to get all the tasks
exports.getAll = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).json({
      status: 1,
      message: "Successfully fetched all tasks",
      data: tasks,
    });
  } catch (err) {
    res.status(200).json({
      status: 0,
      message: "Failed to fetch all tasks",
      error: err.message,
    });
  }
};

// controller to update the task
exports.update = async (req, res) => {
  console.log(req.params.id);
  try {
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json({
      status: 1,
      message: "Updated Task successfully",
      data: task,
    });
  } catch (err) {
    res.status(200).json({
      status: 0,
      message: "Failed to Update task",
      error: err.message,
    });
  }
};

// controller to delete the task
exports.delete = async (req, res) => {
  try {
    await Task.findByIdAndDelete(req.params.id);
    res.status(200).json({
      status: 1,
      message: "Task deleted successfully",
    });
  } catch (err) {
    res.status(200).json({
      status: 0,
      message: "Failed to delete Task",
      error: err.message,
    });
  }
};
