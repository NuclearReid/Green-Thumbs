const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Task extends Model {}

Task.init(
    {
        id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        },
        task_name: {
        type: DataTypes.STRING,
        allowNull: false,
        },
        task_description: {
        type: DataTypes.STRING,
        allowNull: false,
        },
        task_location: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false,
        validate: {
            isIn: [['NSW', 'VIC', 'QLD', 'TAS', 'ACT', 'NT', 'SA', 'WA']],
        },
        }, // Add a closing parenthesis here
        task_season: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false,
        validate: {
            isIn: [['Summer', 'Autumn', 'Winter', 'Spring']],
        },
        }, // Add a closing parenthesis here
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'task',
    }
);

module.exports = Task;