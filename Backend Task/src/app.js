const express = require("express");
const taskRoutes = require("./routes/taskRoutes");
const errorHandler = require("./middlewares/errorHandler");

const app = express();

app.use(express.json());
app.use("/tasks", taskRoutes);
app.use(errorHandler);

app.get("/", (req, res) => {
  res.json({
    message: "Welcome to the Task Management API",
  });
});

module.exports = app;
