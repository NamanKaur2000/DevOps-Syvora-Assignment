const request = require('supertest');
const app = require('../src/index');

describe('GET /api/hello', () => {
  it('should return hello message', async () => {
    const res = await request(app).get('/api/hello');
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('message', 'Hello from Node API!');
  });
});
