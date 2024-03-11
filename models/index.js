// Import models
const User = require('./User.js');
const Post = require('./Post.js');
// Set relationships between Post and User
Post.belongsTo(User, {
    foreignKey: 'user_id'
});
User.hasMany(Post, {
    foreignKey: 'user_id'
});
// Export models
module.exports = { User, Post };

