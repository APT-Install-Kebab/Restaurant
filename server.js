// server.js
require('dotenv').config();

console.log('Environment Variables:', {
	PORT: process.env.PORT,
  	JWT_SECRET: process.env.JWT_SECRET,
});

// const http = require('http');
// const app = require('./src/app');

// const PORT = process.env.PORT || 3000;

// const server = http.createServer(app);

// server.listen(PORT, () => {
//   console.log(`Server listening on port ${PORT}`);
// });

// // Gestion d’erreurs serveur (optionnel mais recommandé)
// server.on('error', (error) => {
//   console.error('Server error:', error);
// });
