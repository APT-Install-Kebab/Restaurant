import express from 'express';
import {
	createOrderProduct,
	deleteOrderProduct,
	getAllOrderProducts,
	getOrderProductByIds,
	updateOrderProduct,
} from '../controllers/orderProductController.js';

const router = express.Router();

router.get('/', getAllOrderProducts);
router.get('/:uid_order/:uid_product', getOrderProductByIds);
router.post('/', createOrderProduct);
router.put('/:uid_order/:uid_product', updateOrderProduct);
router.patch('/:uid_order/:uid_product', updateOrderProduct);
router.delete('/:uid_order/:uid_product', deleteOrderProduct);

export default router;
