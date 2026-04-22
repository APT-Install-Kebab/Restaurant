import { DataTypes } from 'sequelize';
import sequelize from '../loaders/database.js';

const OrderModel = sequelize.define(
	'order',
	{
		uid: {
			type: DataTypes.STRING(32),
			allowNull: false,
			primaryKey: true,
		},
		created_at: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: DataTypes.NOW,
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
		tableName: 'order',
		timestamps: false,
	}
);

export default OrderModel;
