import app from './loaders/express.js';
import router from './routes/index.js';

// Routes
app.use(router);

// 404
app.use((req, res, _next) => {
	console.log('404');
	res.status(404).json({ message: 'Not found' });
});

// Error handler
app.use((err, req, res, _next) => {
	console.log('500');
	console.error(err);
	const status = err.status || 500;
	res.status(status).json({ message: err.message || 'Internal server error' });
});

export default app;
