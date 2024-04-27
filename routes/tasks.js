const express = require('express');
const router = express.Router();
const {
  createTask,
  listTasks,
  updateTask,
  deleteTask
} = require('../controllers/taskController');

router.post('/', createTask);
router.get('/', listTasks);
router.put('/:id', updateTask);
router.delete('/:id', deleteTask);

module.exports = router;
