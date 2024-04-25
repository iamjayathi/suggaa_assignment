const express = require('express');
const { tasks, Task } = require('../models/tasks');

const router = express.Router();

router.post('/', (req, res) => {
    const taskData = [req.body]; 
    const newTasks = taskData.map(taskData => {
        const newTask = new Task(taskData.title, taskData.description, taskData.status);
        tasks.push(newTask);
        return newTask; 
    });
    res.status(201).json(tasks);
});


router.get('/', (req, res) => {
    res.json(tasks);
});

router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { title, description, status } = req.body;
    const task = tasks.find(t => t.id === id);
    if (task) {
        task.title = title;
        task.description = description;
        task.status = status;
        res.json(task);
    } else {
        res.status(404).send({ message: 'Task not found' });
    }
});

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    const index = tasks.findIndex(t => t.id === id);
    if (index !== -1) {
        tasks.splice(index, 1);
        res.json({status: true});
    } else {
        res.status(404).send({ message: 'Task not found' });
    }
});

module.exports = router;
