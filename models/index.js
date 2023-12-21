const Plant = require('./Plant');
const User = require('./User');
const UserPlants = require('./UserPlants')


User.belongsToMany(Plant, {
  foreignKey: 'plant_id',
  through: UserPlants
});

UserPlants.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Plant, UserPlants };