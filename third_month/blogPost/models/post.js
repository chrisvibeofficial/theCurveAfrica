const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../database/sequelize');
const comment = require('./comment');

class post extends Model { }

post.init(
  {
    // Model attributes are defined here
    id: {
      allowNull: false,
      primaryKey: true,
      type: Sequelize.STRING,
    },
    content: {
      type: Sequelize.STRING,
      allowNull: false
    },
    userId: {
      type: Sequelize.STRING,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id'
      },
      onDelete: 'CASCADE',
      onDelete: 'CASCADE'
    },
    commentId: {
      type: Sequelize.STRING,
      references: {
        model: 'comments',
        key: 'id'
      },
      onDelete: 'CASCADE',
      onDelete: 'CASCADE'
    }
  },
  {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: 'post', // We need to choose the model name
    tableName: 'posts',
    timestamps: true
  },
);

post.hasMany(comment, {
  foreignKey: 'postId',
  as: 'comments'
});

comment.belongsTo(post, {
  foreignKey: 'id',
  as: 'comments'
})


module.exports = post