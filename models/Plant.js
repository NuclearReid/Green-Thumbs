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
        plant_type: {
            type: DataTypes.ARRAY(DataTypes.STRING),
            allowNull: false,
            validate: {
                isIn: [['Fruit', 'Vegetable', 'Herb', 'Flower', 'Tree']],
            },
        },
        plant_description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        plant_season: {
            type: DataTypes.ARRAY(DataTypes.STRING),
            allowNull: false,
            validate: {
                isIn: [['Summer', 'Autumn', 'Winter', 'Spring']],
            },
        },
        plant_location: {
            type: DataTypes.ARRAY(DataTypes.STRING),
            allowNull: false,
            validate: {
                isIn: [['NSW', 'VIC', 'QLD', 'TAS', 'ACT', 'NT', 'SA', 'WA']],
            },
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'plant',
    }
);

module.exports = Plant;