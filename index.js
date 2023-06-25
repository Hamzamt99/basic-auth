'use strict'

require('dotenv').config()

const PORT = 3000 || 3009

const {start} = require('./src/server')

const {sequelize} = require('./src/auth/models/index')

sequelize.sync().then(()=>{
    start(PORT)
}).catch(error => console.log(error))