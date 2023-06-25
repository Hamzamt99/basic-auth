'use strict'

require('dotenv').config();

const supertest = require('supertest')

const { app } = require('../src/server')

const req = supertest(app)

const { sequelize } = require('../src/auth/models/index')

beforeAll(async () => {
    await sequelize.sync();
})
afterAll(async () => {
    await sequelize.drop();
})

describe('Test the Error Handlers', () => {
    it('Create a user using POST', async () => {
        const res = await req.post('/signup').send(
            {
                userName:"mousab",
                password:"hamza@"
            }
        )
        expect(res.status).toBe(201);
    })
    // it('test  a user Authorization', async () => {
    // const userName = 'mousab';
    // const password = 'hamza@';

    // // Create a base64-encoded string of the username and password
    // const credentials = Buffer.from(`${userName}:${password}`).toString('base64');

    // // Set the Authorization header with Basic Authentication
    // const headers = {
    //   Authorization: `Basic ${credentials}`,
    // };

    // // Make an HTTP GET request to a protected endpoint
    // const res = await req.post('/signin')

    // // Assert the response as needed
    // expect(res.status).toBe(200);
    // // ... additional assertions
    // })
})

