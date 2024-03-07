const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

class Post extends Model {}

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
    }
    // // post_id: {
    // //     type: sequelize.UUID,
    // //     defaultValue: sequelize.UUIDV4,
    // //     allowNull: false,
    // // }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'post',
  }
);

module.exports = Post;