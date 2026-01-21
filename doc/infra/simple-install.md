# Install nodejs en prod

## Config serveur (à mettre sur docker après)

1) Installer Node.js (via nvm recommandé)

```sh
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
nvm install --lts
```

2) Installer PM2 (process manager)

```sh
npm install -g pm2
```

3) Cloner repos

```sh
git clone https://github.com/APT-Install-Kebab/Restaurant.git
```

## Process Manager (PM2)

PM2 garde l'API en vie et la redémarre en cas de crash :

1) Démarrer l'app

```sh
pm2 start app.js --name "mon-api"
```
2) Sauvegarder la config

```sh
pm2 save
```
3) Auto-démarrage au boot

```sh
pm2 startup
```
