// server.js
import 'dotenv/config';
import http from 'http';
import app from './src/app.js';

const PORT = process.env.PORT || 3000;

const server = http.createServer(app);

server.listen(PORT);

// Gestion d'erreurs serveur (optionnel mais recommandé)
server.on('error', error => {
	console.error('Server error:', error);
});
server.on('listening', () => {
	console.log(`Server is running on port ${PORT}`);
});
