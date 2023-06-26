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

  
  describe('Authentication Routes', () => {
    it('should allow creating a new user through /signup route', async () => {
      const response = await req.post('/signup').send({
          userName: 'mohamd',
          password: '123'
        });
  
      expect(response.status).toBe(201);
    });
    it('should allow logging in as a user through /signin route', async () => {
        const response = await req.post('/signin').type('form').auth('mohamd', '123');
      
        expect(response.status).toBe(200);
      });
      

  });

