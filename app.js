const express = require('express');
const mongoose = require('mongoose');
const taskRoutes = require('./routes/tasks');

const app = express();
app.use(express.json()); 

app.use('/', taskRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));



const mongoDB_URI = 'mongodb+srv://jayathimishra2:hello@cluster0.ian2qrk.mongodb.net/';
mongoose.connect(mongoDB_URI)
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.error('MongoDB connection error:', err));