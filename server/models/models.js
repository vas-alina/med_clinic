const sequelize = require('../db')
const { DataTypes } = require('sequelize')

const Lead = sequelize.define('lead', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    numberPhone: {
        type: DataTypes.STRING,
        allowNull: false
    },
    textProblem: {
        type: DataTypes.STRING,
        allowNull: false
    },
    role: {
        type: DataTypes.STRING,
        defaultValue: "GUEST"
    }
})

const Admin = sequelize.define('admin', {
   
    login: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    
})

module.exports = { Lead, Admin };
