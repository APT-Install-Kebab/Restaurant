# API de restaurant

## architecture du projet
```
project-root/
├── src/
│   ├── config/
│   ├── loaders/
│   ├── routes/
│   ├── controllers/
│   ├── services/
│   ├── models/
│   ├── utils/
│   └── app.js
├── tests/
├── .env
├── package.json
└── server.js
```

`server.js` : démarre le serveur HTTP, lit les variables d’environnement.

​`src/app.js` : crée et configure l’instance Express (middlewares globaux, routes).

`src/​config/` : lecture des variables d’env (process.env), URL de BDD, ports, options JWT.

`src/loaders/` : fonctions qui initialisent Express, la BDD,etc.

`src/middleware` : gestion des erreurs, authentifications, validations.

`src/utils` : fonctions génériques réutilisables (hash de mot de passe, formatage, helpers).

​`tests/` : tests unitaires/intégration (ex. Jest, Mocha).
