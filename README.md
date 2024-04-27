# Task Manager API

The Task Manager API is a simple RESTful service developed using Node.js and MongoDB. It provides basic CRUD functionality for managing tasks. This project is designed to illustrate a basic setup using Node.js with Express for the server, Mongoose for MongoDB interaction, and is deployed on Render.

## Technologies Used

- **Node.js**: Runtime environment for the backend.
- **Express**: Framework used to build the API.
- **MongoDB**: Database to store task data.
- **Mongoose**: ODM (Object Data Modeling) library for MongoDB and Node.js.
- **Render**: Hosting platform where the API is deployed.

## API Endpoints

Below are the available routes within this API:

### Create a Task

- **POST** `/`
  - Creates a new task with the provided `title`, `description`, and `status`.
  - **Body**:
    ```json
    {
      "title": "Example Task",
      "description": "Describe the task details here",
      "status": "TODO"
    }
    ```

### List All Tasks

- **GET** `/`
  - Retrieves all tasks stored in the database.

### Update a Task

- **PUT** `/:id`
  - Updates the task with the specified ID.
  - **Body**:
    ```json
    {
      "title": "Updated Title",
      "description": "Updated Description",
      "status": "DONE"
    }
    ```

### Delete a Task

- **DELETE** `/:id`
  - Deletes the task with the specified ID.

## Deployment

The API is currently deployed at [https://suggaa-assignment.onrender.com/](https://suggaa-assignment.onrender.com/), where you can interact with it using HTTP requests.