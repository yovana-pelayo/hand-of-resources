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
      { id: '1', name: 'Taurus', type: 'Earth' },
      { id: '2', name: 'Scorpio', type: 'Water' },
      { id: '3', name: 'Leo', type: 'Fire' },
      { id: '4', name: 'Libra', type: 'Air' },
    ]);
  });
  it('get /zodiacs/:id should display zodiac detail', async () => {
    const resp = await request(app).get('/zodiacs/1');
    expect(resp.status).toEqual(200);
    expect(resp.body).toEqual({
      id: '1',
      name: 'Taurus',
      type: 'Earth',
    });
  });
  it('POST /zodiacs should add new zodiac', async () => {
    const resp = await request(app).post('/zodiacs').send({
      name: 'Virgo',
      type: 'Earth',
    });

    expect(resp.status).toEqual(200);
    expect(resp.body.name).toEqual('Virgo');
    expect(resp.body.type).toEqual('Earth');
    expect(resp.body.id).not.toBeUndefined();
  });
  it('PUT /zodiacs/:id should update/ edit zodiac', async () => {
    const resp = await request(app).put('/zodiacs/4').send({ name: 'Libra!' });
    expect(resp.status).toEqual(200);
    expect(resp.body.name).toEqual('Libra!');
  });
  afterAll(() => {
    pool.end();
  });
});
