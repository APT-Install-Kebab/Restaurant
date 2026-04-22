import express from 'express';
import { ProductModel as Type } from '../models/associations.js';
const router = express.Router();

// Define your routes here

//default route
router.get('/', async (req, res) => {
	console.log('oscour');
	res.json({ message: 'Welcome to the API restaurant' });
});

router.get('/test', async (req, res) => {
	const products = await Type.findAll();
	console.log('products:', products);
	res.json({ message: products });
});

export default router;
