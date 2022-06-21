const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('president routes', () => {
  beforeEach(() => {
    return setup(pool);
  });
  it('get /presidents should render list of presidents', async () => {
    const resp = await request(app).get('/presidents');
    expect(resp.status).toEqual(200);
    expect(resp.body).toEqual([
      { id: '1', name: 'Biden', start: '2021', final: 'Current' },
      { id: '2', name: 'Trump', start: '2017', final: '2021' },
      { id: '3', name: 'Obama', start: '2009', final: '2017' },
      { id: '4', name: 'Bush', start: '2001', final: '2009' },
    ]);
  });
  afterAll(() => {
    pool.end();
  });
});
