const { body, validationResult } = require('express-validator');

const validateTask = [
  body('title').notEmpty().withMessage('Title is required'),
  body('description').notEmpty().withMessage('Description is required'),
];

const validateTaskUpdate = [
  body('title').optional().notEmpty().withMessage('Title cannot be empty'),
  body('description').optional().notEmpty().withMessage('Description cannot be empty'),
];

const validateTaskId = (req, res, next) => {
  const taskId = parseInt(req.params.id);
  if (isNaN(taskId)) {
    return res.status(400).json({ 
      status: 'error',
      message: 'Invalid task ID' 
    });
  }
  req.params.id = taskId;
  next();
};

const validateRequest = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ 
      status: 'error',
      message: 'Validation failed', 
      errors: errors.array() 
    });
  }
  next();
};

module.exports = {
  validateTask,
  validateTaskUpdate,
  validateTaskId,
  validateRequest,
};