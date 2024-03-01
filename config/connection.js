// Import sequelize
const Sequelize = require('sequelize');
// Require dotenv
require('dotenv').config();

// Create connection to database
const sequelize = new Sequelize(
    // Database name from .env file
    process.env.DB_NAME,
    // User name from .env file
    process.env.DB_USER,
    // Password from .env file
    process.env.DB_PASSWORD,
    {
        host: 'localhost',
        dialect: 'mysql',
        port: 3306,
    }
);

// Export module
module.exports = sequelize;