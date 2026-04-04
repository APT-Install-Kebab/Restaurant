import { DataTypes } from 'sequelize';
import sequelize from '../loaders/database.js';

const OrderModel = sequelize.define(
	'order',
	{
		uid: {
			type: DataTypes.STRING(32),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
		},
		createdAt: {
			type: DataTypes.DATE,
			allowNull: false,
		},
		mail_user: {
			type: DataTypes.STRING(320),
			allowNull: false,
		},
		id_status: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
		},
	},
	{
		sequelize,
		modelName: 'order',
	}
);

export default OrderModel;
