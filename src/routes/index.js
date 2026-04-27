import express from 'express';
import orderProductRouter from './orderProductRoute.js';
import orderRouter from './orderRoute.js';
import productRouter from './productRoute.js';
import statusRouter from './statusRoute.js';
import typeRouter from './typeRoute.js';
const router = express.Router();

// Define your routes here

//default route
router.get('/', async (req, res) => {
	res.json({ message: 'Welcome to the API restaurant' });
});

router.use('/types', typeRouter);
router.use('/statuses', statusRouter);
router.use('/products', productRouter);
router.use('/orders', orderRouter);
router.use('/order-products', orderProductRouter);

export default router;
