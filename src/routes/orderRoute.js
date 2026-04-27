import express from 'express';
import {
	createOrder,
	deleteOrder,
	getAllOrders,
	getOrderByUid,
	updateOrder,
} from '../controllers/orderController.js';

const router = express.Router();

router.get('/', getAllOrders);
router.get('/:uid', getOrderByUid);
router.post('/', createOrder);
router.put('/:uid', updateOrder);
router.patch('/:uid', updateOrder);
router.delete('/:uid', deleteOrder);

export default router;
