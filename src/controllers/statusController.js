import { StatusModel } from '../models/associations.js';

export const getAllStatuses = async (_req, res, next) => {
	try {
		const statuses = await StatusModel.findAll();
		return res.status(200).json(statuses);
	} catch (error) {
		return next(error);
	}
};

export const getStatusById = async (req, res, next) => {
	try {
		const { id } = req.params;
		const status = await StatusModel.findByPk(id);

		if (!status) {
			return res.status(404).json({ message: 'Status not found' });
		}

		return res.status(200).json(status);
	} catch (error) {
		return next(error);
	}
};

export const createStatus = async (req, res, next) => {
	try {
		const { name } = req.body;

		if (!name) {
			return res.status(400).json({ message: 'Missing required field: name' });
		}

		const newStatus = await StatusModel.create({ name });
		return res.status(201).json(newStatus);
	} catch (error) {
		return next(error);
	}
};

export const updateStatus = async (req, res, next) => {
	try {
		const { id } = req.params;
		const { name } = req.body;

		const status = await StatusModel.findByPk(id);
		if (!status) {
			return res.status(404).json({ message: 'Status not found' });
		}

		await status.update({ name: name ?? status.name });
		return res.status(200).json(status);
	} catch (error) {
		return next(error);
	}
};

export const deleteStatus = async (req, res, next) => {
	try {
		const { id } = req.params;
		const status = await StatusModel.findByPk(id);

		if (!status) {
			return res.status(404).json({ message: 'Status not found' });
		}

		await status.destroy();
		return res.status(204).send();
	} catch (error) {
		return next(error);
	}
};
