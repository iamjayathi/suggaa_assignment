const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  status: {
    type: String,
    required: true,
    enum: ['TODO', 'DONE'],
    default: 'TODO'
  }
}, { timestamps: true });

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
