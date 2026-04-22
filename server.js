import app from './src/app.js';
import env from './src/config/app.config.js';

app.listen(env.APP_PORT, () => {
	console.log(`Server is running on port http://localhost:${env.APP_PORT}`);
});

// Gestion d'erreurs serveur (optionnel mais recommandé)
app.on('error', error => {
	console.error('Server error:', error);
});
