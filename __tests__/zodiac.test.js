const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('zodiacs routes', () => {
  beforeEach(() => {
    return setup(pool);
  });
  it('get /zodiacs should render list of zodiac signs', async () => {
    const resp = await request(app).get('/zodiacs');
    expect(resp.status).toEqual(200);
    expect(resp.body).toEqual([
      { id: '1', sign: 'Taurus', type: 'Earth' },
      { id: '2', sign: 'Scorpio', type: 'Water' },
      { id: '3', sign: 'Leo', type: 'Fire' },
      { id: '4', sign: 'Libra', type: 'Air' },
    ]);
  });
  afterAll(() => {
    pool.end();
  });
});
