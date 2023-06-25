'use strict'

require('dotenv').config();

const supertest = require('supertest')

const { app } = require('../server')

const req = supertest(app)

const { sequelize } = require('../auth/models/index')

beforeAll(async () => {
    await sequelize.sync();
})
afterAll(async () => {
    await sequelize.drop();
})

describe('Test the Error Handlers', () => {
    it('Bad Route 404', async () => {
        const res = await req.get('/notfound');
        expect(res.status).toEqual(404);
    })
    it('Bad Method 404', async () => {
        const res = await req.post('/person/name');
        expect(res.status).toEqual(404);
    })
})