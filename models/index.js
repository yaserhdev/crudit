const User = require('./User.js');
const Post = require( './Post.js' );

Post.belongsTo(User, {
    foreignKey: 'user_id'
});

User.hasMany(Post, {
    foreignKey: 'user_id',
});

module.exports = { User , Post };

