import express from 'express';
const router = express.Router();
import { getAll } from './../controllers/temp.controller.js';

// Define your routes here
router.get('/', async (req, res) => {
	res.json({ message: 'Welcome to the API restaurant' });
});

router.get('/test', getAll);

export default router;
