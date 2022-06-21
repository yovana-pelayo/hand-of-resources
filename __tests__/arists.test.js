const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('artists routes', () => {
  beforeEach(() => {
    return setup(pool);
  });
  it('get /artists should render list of artists', async () => {
    const resp = await request(app).get('/artists');
    expect(resp.status).toEqual(200);
    expect(resp.body).toEqual([
      { id: '1', name: 'Queen', genre: 'ROCK', hit: 'Bohemian Rhapsody' },
      { id: '2', name: 'Kid Cudi', genre: 'RAP', hit: 'Pursuit of Happiness' },
      { id: '3', name: 'Miley Cryus', genre: 'ROCk', hit: 'Midnight Sky' },
    ]);
  });
  afterAll(() => {
    pool.end();
  });
});
