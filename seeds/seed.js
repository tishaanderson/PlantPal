const sequelize = require('../config/connection');
const { Plant } = require('../models');


const plantData = require('./plants.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const plants = await Plant.bulkCreate(plantData, {
    individualHooks: true,
    returning: true,
  });

 

  process.exit(0);
};

seedDatabase();
