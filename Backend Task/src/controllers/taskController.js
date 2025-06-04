const taskService = require("../services/taskService");
const apiResponse = require("../utils/apiResponse");

const getTasks = (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;

  const allTasks = taskService.getAllTasks();

  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;
  const paginatedTasks = allTasks.slice(startIndex, endIndex);

  const pagination = {
    total: allTasks.length,
    page,
    limit,
    pages: Math.ceil(allTasks.length / limit),
  };

  if (endIndex < allTasks.length) {
    pagination.next = page + 1;
  }

  if (startIndex > 0) {
    pagination.prev = page - 1;
  }

  return apiResponse.success(
    res,
    {
      tasks: paginatedTasks,
      pagination,
    },
    "Tasks retrieved successfully"
  );
};

const getTaskById = (req, res) => {
  const task = taskService.getTaskById(parseInt(req.params.id));
  if (!task) {
    return apiResponse.notFound(res, "Task not found");
  }
  return apiResponse.success(res, task, "Task retrieved successfully");
};

const createTask = (req, res) => {
  const { title, description } = req.body;
  const newTask = taskService.createTask({ title, description });
  return apiResponse.created(res, newTask, "Task created successfully");
};

const updateTask = (req, res) => {
  const updatedTask = taskService.updateTask(parseInt(req.params.id), req.body);
  if (!updatedTask) {
    return apiResponse.notFound(res, "Task not found");
  }
  return apiResponse.success(res, updatedTask, "Task updated successfully");
};

const deleteTask = (req, res) => {
  const deletedTask = taskService.deleteTask(parseInt(req.params.id));
  if (!deletedTask) {
    return apiResponse.notFound(res, "Task not found");
  }
  return apiResponse.success(res, deletedTask, "Task deleted successfully");
};

module.exports = {
  getTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
};
