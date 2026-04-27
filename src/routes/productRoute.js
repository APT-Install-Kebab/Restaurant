import express from 'express';
import {
	createProduct,
	deleteProduct,
	getAllProducts,
	getProductByUid,
	updateProduct,
} from '../controllers/productController.js';

const router = express.Router();

router.get('/', getAllProducts);
router.get('/:uid', getProductByUid);
router.post('/', createProduct);
router.put('/:uid', updateProduct);
router.patch('/:uid', updateProduct);
router.delete('/:uid', deleteProduct);

export default router;
