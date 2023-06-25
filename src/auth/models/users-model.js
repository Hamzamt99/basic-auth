'use strict'

const bcrypt = require('bcrypt')

const {sequelize,DataTypes} = require('./index')

const user = sequelize.define('users', {
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

user.checker = async function (userName, password) {
    const users = await user.findOne({ where: { userName } })
    const isValid = await bcrypt.compare(password, users.password)
    if (isValid) {
        return users;
    } else {
        throw new Error('user not exists')
    }
}
module.exports = user

