import express from 'express';
import {
	createType,
	deleteType,
	getAllTypes,
	getTypeById,
	updateType,
} from '../controllers/typeController.js';

const router = express.Router();

router.get('/', getAllTypes);
router.get('/:id', getTypeById);
router.post('/', createType);
router.put('/:id', updateType);
router.patch('/:id', updateType);
router.delete('/:id', deleteType);

export default router;
