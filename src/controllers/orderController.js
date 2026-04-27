import { OrderModel } from '../models/associations.js';

const MAX_UID_TRIES = 5;

const generateOrderUid = () => {
	const randomPart = Math.random().toString(36).slice(2, 10);
	return `order_${randomPart}`;
};

export const getAllOrders = async (_req, res, next) => {
	try {
		const orders = await OrderModel.findAll();
		return res.status(200).json(orders);
	} catch (error) {
		return next(error);
	}
};

export const getOrderByUid = async (req, res, next) => {
	try {
		const { uid } = req.params;
		const order = await OrderModel.findByPk(uid);

		if (!order) {
			return res.status(404).json({ message: 'Order not found' });
		}

		return res.status(200).json(order);
	} catch (error) {
		return next(error);
	}
};

export const createOrder = async (req, res, next) => {
	try {
		const { uid, mail_user, id_status, created_at } = req.body;

		if (!mail_user || id_status === undefined) {
			return res.status(400).json({
				message: 'Missing required fields: mail_user, id_status',
			});
		}

		let orderUid = uid;

		if (!orderUid) {
			for (let i = 0; i < MAX_UID_TRIES; i += 1) {
				const candidate = generateOrderUid();
				const existing = await OrderModel.findByPk(candidate);
				if (!existing) {
					orderUid = candidate;
					break;
				}
			}
		}

		if (!orderUid) {
			return res.status(500).json({ message: 'Unable to generate order uid' });
		}

		const existingOrder = await OrderModel.findByPk(orderUid);
		if (existingOrder) {
			return res.status(409).json({ message: 'Order uid already exists' });
		}

		const newOrder = await OrderModel.create({
			uid: orderUid,
			mail_user,
			id_status,
			created_at,
		});

		return res.status(201).json(newOrder);
	} catch (error) {
		return next(error);
	}
};

export const updateOrder = async (req, res, next) => {
	try {
		const { uid } = req.params;
		const { mail_user, id_status, created_at } = req.body;

		const order = await OrderModel.findByPk(uid);
		if (!order) {
			return res.status(404).json({ message: 'Order not found' });
		}

		await order.update({
			mail_user: mail_user ?? order.mail_user,
			id_status: id_status ?? order.id_status,
			created_at: created_at ?? order.created_at,
		});

		return res.status(200).json(order);
	} catch (error) {
		return next(error);
	}
};

export const deleteOrder = async (req, res, next) => {
	try {
		const { uid } = req.params;
		const order = await OrderModel.findByPk(uid);

		if (!order) {
			return res.status(404).json({ message: 'Order not found' });
		}

		await order.destroy();
		return res.status(204).send();
	} catch (error) {
		return next(error);
	}
};
