const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('shark routes', () => {
  beforeEach(() => {
    return setup(pool);
  });
  it('get /sharks should display a list of sharks', async () => {
    const resp = await request(app).get('/sharks');
    expect(resp.status).toEqual(200);
    expect(resp.body).toEqual([
      {
        id: '1',
        name: 'bull shark',
        species: 'Carcharhinus leucas',
        family: 'Carcharhinidae',
      },
      {
        id: '2',
        name: 'ghost shark',
        species: 'Callorhinchus milii',
        family: 'Carcharhinidae',
      },
      {
        id: '3',
        name: 'tiger shark',
        species: 'Galeocerdo cuvier',
        family: 'Carcharhinidae',
      },
      {
        id: '4',
        name: 'lemon shark',
        species: 'Negaprion brevirostris',
        family: 'Carcharhinidae',
      },
    ]);
  });
  afterAll(() => {
    pool.end();
  });
});
