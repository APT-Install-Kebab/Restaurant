import { Sequelize } from 'sequelize';
import { default as configDB } from '../config/database.js';

/**
 * Initializes Sequelize instance for database connection.
 */
const sequelize = new Sequelize(configDB.database, configDB.username, configDB.password, {
	host: configDB.host,
	dialect: configDB.dialect,
	port: configDB.port,
});

(async () => {
	try {
		await sequelize.authenticate();
	} catch (error) {
		console.error('Unable to connect to the database:', error);
	}
})();

export default sequelize;
