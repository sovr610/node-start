import app from '../src/server/server';
import * as request from 'supertest';

describe('GET / - the root endpoint', () => {
  it('root endpoint', async () => {
    const result = await request(app).get('/');
    expect(result.text).toEqual('Hello World!');
    expect(result.statusCode).toEqual(200);
  });
});
