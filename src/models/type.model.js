import { DataTypes } from 'sequelize';
import sequelize from '../loaders/database.js';

const TypeModel = sequelize.define(
	'type',
	{
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
		},
		name: {
			type: DataTypes.STRING(100),
			allowNull: false,
		},
	},
	{
		tableName: 'type',
		timestamps: false,
	}
);

export default TypeModel;
