import { ProductModel } from '../models/associations.js';

const MAX_UID_TRIES = 5;

const generateProductUid = () => {
	const randomPart = Math.random().toString(36).slice(2, 10);
	return `prod_${randomPart}`;
};

export const getAllProducts = async (_req, res, next) => {
	try {
		const products = await ProductModel.findAll();
		return res.status(200).json(products);
	} catch (error) {
		return next(error);
	}
};

export const getProductByUid = async (req, res, next) => {
	try {
		const { uid } = req.params;
		const product = await ProductModel.findByPk(uid);

		if (!product) {
			return res.status(404).json({ message: 'Product not found' });
		}

		return res.status(200).json(product);
	} catch (error) {
		return next(error);
	}
};

export const createProduct = async (req, res, next) => {
	try {
		const { uid, name, price, id_type } = req.body;

		if (!name || price === undefined || id_type === undefined) {
			return res.status(400).json({
				message: 'Missing required fields: name, price, id_type',
			});
		}

		let productUid = uid;

		if (!productUid) {
			for (let i = 0; i < MAX_UID_TRIES; i += 1) {
				const candidate = generateProductUid();
				const existing = await ProductModel.findByPk(candidate);
				if (!existing) {
					productUid = candidate;
					break;
				}
			}
		}

		if (!productUid) {
			return res.status(500).json({ message: 'Unable to generate product uid' });
		}

		const existingProduct = await ProductModel.findByPk(productUid);
		if (existingProduct) {
			return res.status(409).json({ message: 'Product uid already exists' });
		}

		const newProduct = await ProductModel.create({
			uid: productUid,
			name,
			price,
			id_type,
		});

		return res.status(201).json(newProduct);
	} catch (error) {
		return next(error);
	}
};

export const updateProduct = async (req, res, next) => {
	try {
		const { uid } = req.params;
		const { name, price, id_type } = req.body;

		const product = await ProductModel.findByPk(uid);
		if (!product) {
			return res.status(404).json({ message: 'Product not found' });
		}

		await product.update({
			name: name ?? product.name,
			price: price ?? product.price,
			id_type: id_type ?? product.id_type,
		});

		return res.status(200).json(product);
	} catch (error) {
		return next(error);
	}
};

export const deleteProduct = async (req, res, next) => {
	try {
		const { uid } = req.params;

		const product = await ProductModel.findByPk(uid);
		if (!product) {
			return res.status(404).json({ message: 'Product not found' });
		}

		await product.destroy();
		return res.status(204).send();
	} catch (error) {
		return next(error);
	}
};
