const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('god routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it(' POST /gods should add new god', async () => {
    const resp = await request(app).post('/gods').send({
      name: 'Yovana Pelayo',
      known: 'I am not crying you are',
      drink: 'cold brew',
    });

    expect(resp.status).toEqual(200);
    expect(resp.body.name).toEqual('Yovana Pelayo');
    expect(resp.body.known).toEqual('I am not crying you are');
    expect(resp.body.drink).toEqual('cold brew');
    expect(resp.body.id).not.toBeUndefined();
  });
  afterAll(() => {
    pool.end();
  });
});
