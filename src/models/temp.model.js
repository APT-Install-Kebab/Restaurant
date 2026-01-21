import { DataTypes, Model } from 'sequelize';
import sequelize from '../loaders/database.js';

class TempModel extends Model {}

TempModel.init(
	{
		tempUuid: {
			type: DataTypes.UUID,
			allowNull: true,
		},
		tempName: {
			type: DataTypes.STRING,
			allowNull: false,
		},
	},
	{
		sequelize,
		modelName: 'temp',
	}
);

export default TempModel;
