const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

// Middleware to parse JSON requests
app.use(bodyParser.json());

// Connect to MongoDB (replace with your MongoDB connection string)
mongoose.connect('mongodb://localhost:27017/campusbites', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define a basic schema for an event (for MongoDB)
const eventSchema = new mongoose.Schema({
  eventName: { type: String, required: true },
  orgName: { type: String, required: true},
  eventDetails: { type: String, required: true },
  foodDetails: { type: String, required: false },
  date: { type: Date, required: true },
  time: { type: String, required: true },
  location: { type: String, required: true },
});

// Create a model from the schema
const Event = mongoose.model('Event', eventSchema);

// Basic test route to ensure the server is running
app.get('/', (req, res) => {
  res.send('API is running');
});
