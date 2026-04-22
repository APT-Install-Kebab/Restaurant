import { TypeModel } from '../models/associations.js';

export const getAllTypes = async (_req, res, next) => {
	try {
		const types = await TypeModel.findAll();
		return res.status(200).json(types);
	} catch (error) {
		return next(error);
	}
};

export const getTypeById = async (req, res, next) => {
	try {
		const { id } = req.params;
		const type = await TypeModel.findByPk(id);

		if (!type) {
			return res.status(404).json({ message: 'Type not found' });
		}

		return res.status(200).json(type);
	} catch (error) {
		return next(error);
	}
};

export const createType = async (req, res, next) => {
	try {
		const { name } = req.body;

		if (!name) {
			return res.status(400).json({ message: 'Missing required field: name' });
		}

		const newType = await TypeModel.create({ name });
		return res.status(201).json(newType);
	} catch (error) {
		return next(error);
	}
};

export const updateType = async (req, res, next) => {
	try {
		const { id } = req.params;
		const { name } = req.body;

		const type = await TypeModel.findByPk(id);
		if (!type) {
			return res.status(404).json({ message: 'Type not found' });
		}

		await type.update({ name: name ?? type.name });
		return res.status(200).json(type);
	} catch (error) {
		return next(error);
	}
};

export const deleteType = async (req, res, next) => {
	try {
		const { id } = req.params;
		const type = await TypeModel.findByPk(id);

		if (!type) {
			return res.status(404).json({ message: 'Type not found' });
		}

		await type.destroy();
		return res.status(204).send();
	} catch (error) {
		return next(error);
	}
};
