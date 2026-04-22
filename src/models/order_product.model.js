import { DataTypes } from 'sequelize';
import sequelize from '../loaders/database.js';

const OrderProductModel = sequelize.define(
	'order_product',
	{
		uid_order: {
			type: DataTypes.STRING(32),
			allowNull: false,
			primaryKey: true,
		},
		uid_product: {
			type: DataTypes.STRING(32),
			allowNull: false,
			primaryKey: true,
		},
		quantity: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
		},
	},
	{
		tableName: 'order_product',
		timestamps: false,
	}
);

export default OrderProductModel;
