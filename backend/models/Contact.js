const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../util/database');

class Contact extends Model { }
Contact.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    firstName: {
        type: DataTypes.STRING,
    },
    lastName: {
        type: DataTypes.STRING,
    },
    contact: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
}, {
    sequelize,
    modelName: 'contact'
});


module.exports = Contact;