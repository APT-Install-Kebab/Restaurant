// src/app.js
const express = require('express');
const routes = require('./routes'); // src/routes/index.js

const app = express();

// Routes
app.use('/api', routes);

// 404
app.use((req, res, next) => {
  res.status(404).json({ message: 'Not found' });
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err);
  const status = err.status || 500;
  res.status(status).json({ message: err.message || 'Internal server error' });
});

module.exports = app;
