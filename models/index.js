const User = require("./User");
const Blog = require("./Blog");
const Plant = require('./Plant');


User.hasMany(Blog, {
  foreingkey: "user_id",
  onDelete: 'CASCADE'
});

Blog.belongsTo(User, {
  foreignKey: "user_id",
});
// Blog.hasMany(Comment, {
//   foreignKey: 'blogPost_id',
//   onDelete: 'CASCADE',
// });

// Comment.belongsTo(Blog, {
//   foreignKey: 'blogPost_id'
// });

// Comment.belongsTo(User,{
//   foreignKey: 'user_id'
// });

module.exports = { User, Blog, Plant };

