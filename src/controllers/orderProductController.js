import { OrderProductModel } from '../models/associations.js';

export const getAllOrderProducts = async (_req, res, next) => {
	try {
		const orderProducts = await OrderProductModel.findAll();
		return res.status(200).json(orderProducts);
	} catch (error) {
		return next(error);
	}
};

export const getOrderProductByIds = async (req, res, next) => {
	try {
		const { uid_order, uid_product } = req.params;
		const orderProduct = await OrderProductModel.findOne({
			where: { uid_order, uid_product },
		});

		if (!orderProduct) {
			return res.status(404).json({ message: 'Order product not found' });
		}

		return res.status(200).json(orderProduct);
	} catch (error) {
		return next(error);
	}
};

export const createOrderProduct = async (req, res, next) => {
	try {
		const { uid_order, uid_product, quantity } = req.body;

		if (!uid_order || !uid_product || quantity === undefined) {
			return res.status(400).json({
				message: 'Missing required fields: uid_order, uid_product, quantity',
			});
		}

		const existingOrderProduct = await OrderProductModel.findOne({
			where: { uid_order, uid_product },
		});
		if (existingOrderProduct) {
			return res.status(409).json({ message: 'Order product already exists' });
		}

		const newOrderProduct = await OrderProductModel.create({
			uid_order,
			uid_product,
			quantity,
		});

		return res.status(201).json(newOrderProduct);
	} catch (error) {
		return next(error);
	}
};

export const updateOrderProduct = async (req, res, next) => {
	try {
		const { uid_order, uid_product } = req.params;
		const { quantity } = req.body;

		const orderProduct = await OrderProductModel.findOne({
			where: { uid_order, uid_product },
		});
		if (!orderProduct) {
			return res.status(404).json({ message: 'Order product not found' });
		}

		await orderProduct.update({
			quantity: quantity ?? orderProduct.quantity,
		});

		return res.status(200).json(orderProduct);
	} catch (error) {
		return next(error);
	}
};

export const deleteOrderProduct = async (req, res, next) => {
	try {
		const { uid_order, uid_product } = req.params;
		const orderProduct = await OrderProductModel.findOne({
			where: { uid_order, uid_product },
		});

		if (!orderProduct) {
			return res.status(404).json({ message: 'Order product not found' });
		}

		await orderProduct.destroy();
		return res.status(204).send();
	} catch (error) {
		return next(error);
	}
};
