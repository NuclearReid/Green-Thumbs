const sequelize = require("../config/connection");
const seedPlant = require('./PlantData');

const seedBlog = require("./blogData");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  
  await seedPlant();
  await seedBlog();

  process.exit(0);
};

seedAll();

