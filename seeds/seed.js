const sequelize = require('../config/connection');
const { Plant } = require('../models');
const plantData = require('./plants.json');

const seedDatabase = async () => {
  try {
    await sequelize.sync({ force: true });

    const plants = await Plant.bulkCreate(plantData, {
      individualHooks: true,
      returning: true,
    });

    console.log(`${plants.length} plants seeded successfully.`);
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    process.exit(0);
  }
};

seedDatabase();

// const sequelize = require('../config/connection');
// const { Plant } = require('../models');


// const plantData = require('./plants.json');

// const seedDatabase = async () => {
//   await sequelize.sync({ force: true });

//   const plants = await Plant.bulkCreate(plantData, {
//     individualHooks: true,
//     returning: true,
//   });

 

//   process.exit(0);
// };

// seedDatabase();
