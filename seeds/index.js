const sequelize = require("../config/connection");

const seedBlog = require("./blogData");

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedBlog();

  process.exit(0);
};

seedAll();
