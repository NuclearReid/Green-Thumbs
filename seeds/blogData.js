const { Blog } = require("../models");
console.log("blogPostData");
const blogData = [
  {
    title: "blog 1",
    body: "Blog 1 Body",
  },
  {
    title: "blog 2",
    body: "Blog 2 Body",
  },
];
console.log(blogData);
const seedBlogPost = () => Blog.bulkCreate(blogData);

module.exports = seedBlogPost;
