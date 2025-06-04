const express = require("express");
const router = express.Router();
const taskController = require("../controllers/taskController");
const {
  validateTask,
  validateRequest,
  validateTaskId,
} = require("../middlewares/validation");

router.get("/", taskController.getTasks);

router.get("/:id", validateTaskId, taskController.getTaskById);

router.post("/", validateTask, validateRequest, taskController.createTask);

router.put(
  "/:id",
  validateTaskId,
  validateTask,
  validateRequest,
  taskController.updateTask
);

router.delete("/:id", validateTaskId, taskController.deleteTask);

module.exports = router;
