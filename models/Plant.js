const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Plant extends Model {

}

Plant.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        plantName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        plantType: {
            type: DataTypes.ARRAY(DataTypes.STRING),
            allowNull: false,
            validate: {
                isIn: [['Fruit', 'Vegetable', 'Herb', 'Flower', 'Tree']],
            },
        },
        plantDescription: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        plantSeason: {
            type: DataTypes.ARRAY(DataTypes.STRING),
            allowNull: false,
            validate: {
                isIn: [['Summer', 'Autumn', 'Winter', 'Spring']],
            },
        },
        plantLocation: {
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