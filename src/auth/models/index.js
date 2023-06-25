'use strict'

const {Sequelize,DataTypes} = require('sequelize') 

const DATA_BASE_URL = process.env.DATA_BASE_URI

let sequelize = new Sequelize(DATA_BASE_URL,{});

const user = require('./users-model')


module.exports = {
    sequelize,
    DataTypes
}

