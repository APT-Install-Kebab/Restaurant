import TempModel from '../models/temp.model.js';
// import sequelize from '../loaders/database.js';

export async function getAll(req, res) {
	try {
		const temps = await TempModel.findAll();
		res.status(200).json(temps);
	} catch (error) {
		console.error('Unable to connect to the database:', error);
	}
}
