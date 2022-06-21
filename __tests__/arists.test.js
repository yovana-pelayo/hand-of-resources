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
  it(' POST /artists should add new god', async () => {
    const resp = await request(app).post('/artists').send({
      name: 'Maddie & Tae',
      genre: 'country',
      hit: 'Die From A Broken Heart',
    });

    expect(resp.status).toEqual(200);
    expect(resp.body.name).toEqual('Yovana Pelayo');
    expect(resp.body.genre).toEqual('country');
    expect(resp.body.hit).toEqual('Die From A Broken Heart');
    expect(resp.body.id).not.toBeUndefined();
  });
  afterAll(() => {
    pool.end();
  });
});
