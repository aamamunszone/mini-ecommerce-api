const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

// Load Environment Variable
dotenv.config();

// Connect Database
connectDB();

// Express App Initialization
const app = express();
const port = process.env.PORT || 3000;

// Body Parser (For Receive JSON Data)
app.use(express.json());

// Health Check Route
app.get('/', (req, res) => {
  res.send('Mini E-Commerce API is Running Successfully...');
});

// Server Start
app.listen(port, () => {
  console.log(
    `Server is running in ${process.env.NODE_ENV || 'development'} mode on port ${port}`,
  );
});
