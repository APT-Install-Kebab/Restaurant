import { DataTypes } from 'sequelize';
import sequelize from '../loaders/database.js';

const ProductModel = sequelize.define(
	'product',
	{
		uid: {
			type: DataTypes.STRING(32),
			allowNull: false,
			primaryKey: true,
		},
		name: {
			type: DataTypes.STRING(100),
			allowNull: false,
		},
		price: {
			type: DataTypes.DECIMAL(10, 2),
			allowNull: false,
		},
		id_type: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
		},
	},
	{
		tableName: 'product',
		timestamps: false,
	}
);

export default ProductModel;
