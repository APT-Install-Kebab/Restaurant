import express from 'express';
import {
	createStatus,
	deleteStatus,
	getAllStatuses,
	getStatusById,
	updateStatus,
} from '../controllers/statusController.js';

const router = express.Router();

router.get('/', getAllStatuses);
router.get('/:id', getStatusById);
router.post('/', createStatus);
router.put('/:id', updateStatus);
router.patch('/:id', updateStatus);
router.delete('/:id', deleteStatus);

export default router;
