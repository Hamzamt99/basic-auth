'use strict'

const user = (sequelize, DataTypes) => sequelize.define('users', {
    userName: {
        type: DataTypes.STRING,
        allowNull: false,
        uniqe: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

module.exports = user

