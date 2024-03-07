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
            get() {
                return this.getDataValue('plantSeason').split(',')
            },
            set(val) {
                return this.setDataValue('plantSeason', val.join(','));
            }
            
        },
        plantLocation: {
            type: DataTypes.STRING,
            allowNull: false,
            get() {
                return this.getDataValue('plantLocation').split(',')
            },
            set(val) {
                return this.setDataValue('plantLocation', val.join(','));
            }
            
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