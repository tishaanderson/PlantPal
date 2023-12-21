const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Plant extends Model {}

Plant.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    plant_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image_filename: {
      type: DataTypes.STRING, // Assuming image filenames are strings  scn
    },
    description: {
      type: DataTypes.TEXT,
    },
    sunlight_requirements: {
      type: DataTypes.STRING,
    },
    watering_needs: {
      type: DataTypes.STRING,
    },
    image_url: {
      type: DataTypes.STRING,
    },
    category: {
      type: DataTypes.STRING,
      },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'plants',
  }
);

module.exports = Plant;