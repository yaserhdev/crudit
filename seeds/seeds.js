// Import sequelize, models, and data
const sequelize = require('../config/connection.js');
const { User, Post } = require('../models');
const userData = require('./userData.json');
const postData = require('./postData.json')
// Function to seed database
const seedDatabase = async () => {
  await sequelize.sync({ force: true });
  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });
  await Post.bulkCreate(postData, {
    individualHooks: true,
    returning: true,
  });
  process.exit(0);
};
// Call function to seed database
seedDatabase();