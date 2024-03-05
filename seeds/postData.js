const { Post } = require('../models');

const postData = [
  {
    post_id: 1,
    title: 'Test',
    content: 'This is a test post!',
    post_id: '',
    user_id: '',
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;