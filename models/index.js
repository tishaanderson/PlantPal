const Category = require('./Category');
const Plants = require('./Plants');
const User = require('./User');
const UserPlants = require('./UserPlants')


User.hasMany(Project, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Project.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Project };
