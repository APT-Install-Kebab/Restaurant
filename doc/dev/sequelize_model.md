# Documentation : Implémentation d’un Model Sequelize

Ce document explique comment implémenter un modèle avec Sequelize dans le projet, en prenant l’exemple du modèle `ProductModel`.

## 1. Création du modèle

Le modèle est défini en étendant la classe `Model` de Sequelize :

```js
import { DataTypes, Model } from 'sequelize';
import sequelize from '../loaders/database.js';

class ProductModel extends Model {}
```

## 2. Initialisation du modèle

La méthode statique `init` permet de définir les champs du modèle et leurs propriétés :

```js
ProductModel.init(
  {
    uid: {
      type: DataTypes.STRING(32),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    id_type: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'product',
  }
);
```

### Détail des champs
- **uid** : identifiant unique, clé primaire, chaîne de 32 caractères, auto-incrémenté.
- **name** : nom du produit, chaîne de 100 caractères.
- **price** : prix du produit, décimal (10,2).
- **id_type** : identifiant du type de produit, entier.

## 3. Définition des associations

Pour lier le modèle à d’autres tables, on utilise les méthodes d’association de Sequelize. Exemple :

```js
ProductModel.hasOne(TypeModel, {
  foreignKey: {
    name: 'fk_product_type',
  },
});
```

Cela crée une relation "un produit a un type".

## 4. Exportation du modèle

Le modèle est exporté pour être utilisé ailleurs dans l’application :

```js
export default ProductModel;
```

## 5. Bonnes pratiques
- Toujours définir les types et contraintes des champs.
- Utiliser des noms explicites pour les clés étrangères.
- Documenter chaque modèle pour faciliter la maintenance.

---

**Répertoire concerné :** `src/models/`

**Fichier d’exemple :** `product.model.js`
