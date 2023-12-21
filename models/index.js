const Plant = require('./Plant');
const User = require('./User');
const UserPlants = require('./UserPlants')


User.belongsToMany(Plant, {
  through: UserPlants,
  foreignKey: 'user_id',  
});

Plant.belongsToMany(User, {
  through: UserPlants,
  foreignKey: 'plant_id',
})

User.hasMany(UserPlants, {
  foreignKey: 'user_id',
})

UserPlants.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Plant, UserPlants };