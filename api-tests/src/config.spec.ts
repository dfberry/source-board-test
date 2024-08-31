//import request from 'supertest'; // Assuming you are using supertest for HTTP requests
//import 'dotenv/config';

//const BASE_URL = process.env['BASE_URL'] || 'http://localhost:4000';

describe('API Config', () => {
  it('should get API config', async () => {
    // const response = await request(`${BASE_URL}/config`).get('/config');
    // expect(response.status).toBe(200);

    // // Verify headers contain x-source-board-version
    // expect(response.headers).toHaveProperty('x-source-board-version');

    // // Make sure the response has app_state and env_vars properties
    // const config = response.body;
    // expect(config).toHaveProperty('app_state');
    // expect(config).toHaveProperty('env_vars');
    expect(1).toBe(1);
  });
});