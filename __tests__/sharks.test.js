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
  it('get /sharks/:id should display shark detail', async () => {
    const resp = await request(app).get('/sharks/4');
    expect(resp.status).toEqual(200);
    expect(resp.body).toEqual({
      id: '4',
      name: 'lemon shark',
      species: 'Negaprion brevirostris',
      family: 'Carcharhinidae',
    });
  });
  it(' POST /sharks should add new shark', async () => {
    const resp = await request(app).post('/sharks').send({
      name: 'whale shark',
      species: 'Rhincodon typus',
      family: 'Rhincodon typus',
    });

    expect(resp.status).toEqual(200);
    expect(resp.body.name).toEqual('whale shark');
    expect(resp.body.species).toEqual('Rhincodon typus');
    expect(resp.body.family).toEqual('Rhincodon typus');
    expect(resp.body.id).not.toBeUndefined();
  });
  it('DELETE /sharks/1 should delete a shark', async () => {
    const resp = await request(app).post('/shark/1');
    expect(resp.status).toEqual(200);
    const { body } = await request(app).get('/sharks/1');
    expect(body).toEqual('');
  });
  afterAll(() => {
    pool.end();
  });
});
('ab');
