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
            type: DataTypes.STRING,
            allowNull: false,
            
        },
        plantDescription: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        plantSeason: {
            type: DataTypes.STRING,
            allowNull: false,
            
        },
        plantLocation: {
            type: DataTypes.ARRAY(DataTypes.STRING),
            allowNull: false,
            
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