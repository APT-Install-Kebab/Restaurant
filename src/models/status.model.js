import { DataTypes } from 'sequelize';
import sequelize from '../loaders/database.js';

const StatusModel = sequelize.define(
	'status',
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
		tableName: 'status',
		timestamps: false,
	}
);

export default StatusModel;
