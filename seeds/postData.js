const { Post } = require('../models');
const sequelize = require('../config/connection.js');

const postData = [
  {
    title: 'Test',
    content: 'This is a test post!',
    user_id: 1,
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;