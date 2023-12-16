const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const User = require('./User');
const Plant = require('./Plant')

class UserPlants extends Model {}

//written incorrectly, tie in favorited plates
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
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id'
      }
    }, 
    plant_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'plants',
        key: 'id'
      }
    },
  },
  //
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user_plants',
  }
)

module.exports = UserPlants;