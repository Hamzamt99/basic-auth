'use strict'

const express = require('express')
const app = express();

const cors = require('cors')
console.log('yesst')
app.use(cors());
app.use(express.json())

app.listen(3000,()=> console.log('running on port 3000'))