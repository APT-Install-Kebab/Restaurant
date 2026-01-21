# Lint & Format

## Style de code

Indentation : Tabs (pas d'espaces)
Quotes : Simple quotes ' pour les strings
Semi-colons : Toujours terminer les instructions par ;

## Pourquoi ces réglages ?

- On utilise des tabs (pas des espaces) pour l'indentation
- Taille de tab = 4 pour la lisibilité
- Auto-formatage à la sauvegarde
- Fichiers propres (pas d'espaces en fin de ligne, retour à la ligne final)

## VS Code - Configuration minimale

setting.json (soit de ton profil node_js, soit dans .vscode/settings.json dans le dossier)

```json
{
	"editor.insertSpaces": false,
	"editor.tabSize": 4,
	"editor.detectIndentation": false,
	"editor.formatOnSave": true,
	"files.insertFinalNewline": true,
	"files.trimTrailingWhitespace": true
}
```

> [!TIP]
> **Extensions VS Code recommandées**
>
> Prettier - Code formatter (esbenp.prettier-vscode)
>
> ESLint (dbaeumer.vscode-eslint)

## Commandes disponibles

### Vérification uniquement

```bash
npm run lint:check      # Vérifie les erreurs ESLint
npm run format:check    # Vérifie le formatage Prettier
npm run check           # Vérifie lint + format
```

### Correction automatique :

```bash
bashnpm run lint:fix      # Corrige les erreurs ESLint
npm run format:fix        # Corrige le formatage Prettier
npm run fix               # Corrige lint + format
```

## Avant de commit

> [!CAUTION]
> Lance toujours `npm run check` pour vérifier que ton code respecte les règles du projet.
>
> Si des erreurs apparaissent, lance npm run fix pour les corriger automatiquement.
