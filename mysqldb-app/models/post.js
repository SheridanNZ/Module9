const dbConnect = require('../dbConnect');
const { Model, DataTypes } = require('sequelize');

const sequelizeInstance = dbConnect.Sequelize;

class Post extends Model {}

Post.init( // sequlize will create the table if it doesn;t already exist on start up
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    postTitle: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    postDesc: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    postURL: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    postCreationTime: {
      type: DataTypes.DATE, // Use DATE type for timestamp
      allowNull: false,
      defaultValue: DataTypes.NOW, // Automatically set to current timestamp
    },
    likeCount: {
      type: DataTypes.INTEGER, // Use INTEGER for like count
      allowNull: false,
      defaultValue: 0, // Default to 0 likes
    },
  },
  {
    sequelize: sequelizeInstance,
    modelName: "posts", 
    timestamps: true,
    freezeTableName: true, 
  }
);

module.exports = Post;