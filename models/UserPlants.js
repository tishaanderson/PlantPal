const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const User = require('./User');
const Plants = require('./Plants')

class UserPlants extends Model {}

UserPlants.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    notes: {
      type: DataTypes.TEXT,
    },
    care_reminders: {
      type: DataTypes.JSON,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user_plants',
  }
)

module.exports = UserPlants;