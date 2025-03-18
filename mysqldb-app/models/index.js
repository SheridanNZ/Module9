"use strict";
const User = require("./user"); // require the model
const Post = require("./post"); // require the model

async function init() {
  await User.sync(); // sync the model AND also sync any extra models here
  await Post.sync();
}

init();

// Sequelize will auto-generate foreign key column names based on the table names
Post.belongsTo(User);
User.hasMany(Post);

module.exports = {
  User,  // export the model AND also export any extra models here
  Post,
};