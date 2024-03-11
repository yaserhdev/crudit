// Import model, datatypes, and sequelize
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');
// Declare class for model
class Post extends Model { }
// Set properties of model
Post.init(
  {
    post_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    title: {
      type: DataTypes.STRING,
    },
    content: {
      type: DataTypes.TEXT,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'user_id'
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'post',
  }
);
// Export model
module.exports = Post;