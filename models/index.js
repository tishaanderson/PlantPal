const Plant = require('./Plant');
const User = require('./User');
const UserPlants = require('./UserPlants')


User.hasMany(UserPlants, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

UserPlants.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Plant, UserPlants };