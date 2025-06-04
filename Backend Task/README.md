# Task Management API

This project is a simple RESTful API for managing tasks (to-do items) built using Node.js and Express.js. It allows users to perform basic CRUD (Create, Read, Update, Delete) operations on tasks.

## Project Structure

Backend Task/
├──node_moodules
├── src/
│   ├── controllers/
│   │   └── taskController.js      # Controller functions for task routes
│   ├── middlewares/
│   │   ├── errorHandler.js        # Global error handling middleware
│   │   └── validation.js          # Request validation middleware
│   ├── routes/
│   │   └── taskRoutes.js          # Routes for task API endpoints
│   ├── services/
│   │   └── taskService.js         # Business logic for task operations
│   ├── utils/
│   │   └── apiResponse.js         # Standardized API response utilities
│   └── app.js                     # Express app configuration
├──package-lock.json
├── package.json                   # Project dependencies and scripts
├── README.md                      # Project documentation
└── server.js                      # Application entry point

## Installation

git clone <repository-url>
cd backend-task

## Install dependencies:

npm install

## Start the server:

node server.js / nodemon server.js

## Your Server will run at :

http://localhost:3000

## Technologies Used : 

Node.js
Express.js
Express Validator (for request validation)
Nodemon (for development)
CORS (for cross-origin resource sharing)

## Testing

Postman

## Testing Using Postman 

# Create Task (POST) :

1. Create First Task:

Method: POST
URL: http://localhost:3000/tasks
Headers:
   -Content-Type: application/json

Body (raw JSON):
{
  "title": "Google",
  "description": "A powerful search engine"
}

2. Create Second Task:

Method: POST
URL: http://localhost:3000/tasks
Headers:
   -Content-Type: application/json

Body (raw JSON):
{
  "title": "Power BI",
  "description": "A Analitical platform provide by  microsoft"
}

#  Get All Tasks (GET):

Method: GET
URL: http://localhost:3000/tasks

# Get Task by ID (GET) :

Method: GET
URL: http://localhost:3000/tasks/1

# Update a Task (PUT):

Method: PUT
URL: http://localhost:3000/tasks/2
Headers:
   -Content-Type: application/json

Body (raw JSON):
{
  "title": "Tableau",
  "description": "a analysis tool"
}

# Delete a Task (DELETE):

Method: DELETE
URL: http://localhost:3000/tasks/3

# Test Validation Error - Missing Title (POST):

Method: POST
URL: http://localhost:3000/tasks
Headers:
  -Content-Type: application/json

Body (raw JSON):
{
  "description": "About herself"
}

# Test Pagination (GET):

Method: GET
URL: http://localhost:3000/tasks?page=1&limit=2

# Test Invalid Task ID (GET):

Method: GET
URL: http://localhost:3000/tasks/999

