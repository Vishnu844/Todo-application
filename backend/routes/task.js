/* eslint-disable no-undef */
const router = require("express").Router();
const taskController = require("../controllers/taskController");

router.get("/tasks", taskController.getAll);
router.post("/tasks", taskController.create);
router.put("/tasks/:id", taskController.update);
router.delete("/tasks/:id", taskController.delete);

module.exports = router;