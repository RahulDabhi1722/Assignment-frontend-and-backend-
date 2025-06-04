let tasks = [];
let currentId = 1;

const getAllTasks = () => {
  return tasks;
};

const getTaskById = (id) => {
  return tasks.find((task) => task.id === parseInt(id));
};

const createTask = (taskData) => {
  const newTask = {
    id: currentId++,
    title: taskData.title,
    description: taskData.description,
  };
  tasks.push(newTask);
  return newTask;
};

const updateTask = (id, taskData) => {
  const taskIndex = tasks.findIndex((task) => task.id === parseInt(id));
  if (taskIndex === -1) return null;

  tasks[taskIndex] = {
    ...tasks[taskIndex],
    ...taskData,
  };
  return tasks[taskIndex];
};

const deleteTask = (id) => {
  const taskIndex = tasks.findIndex((task) => task.id === parseInt(id));
  if (taskIndex === -1) return null;

  return tasks.splice(taskIndex, 1)[0];
};

module.exports = {
  getAllTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
};
