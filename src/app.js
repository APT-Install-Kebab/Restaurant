// src/app.js
import express from 'express';
import routes from './routes/index.js';

const app = express();

// Routes
app.use(routes);

// 404
app.use((req, res, _next) => {
	res.status(404).json({ message: 'Not found' });
});

// Error handler
app.use((err, req, res, _next) => {
	console.error(err);
	const status = err.status || 500;
	res.status(status).json({ message: err.message || 'Internal server error' });
});

export default app;
