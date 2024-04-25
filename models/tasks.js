let tasks = []; 
let lastId = 0; 
const { v4: uuidv4 } = require('uuid');


class Task {
  constructor(title, description, status) {
    this.id = uuidv4();;
    this.title = title;
    this.description = description;
    this.status = status;
  }
}

module.exports = { tasks, Task };
