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
  it('PUT /presidents/:id should update/ edit president information', async () => {
    const resp = await request(app)
      .put('/presidents/2')
      .send({ name: 'Trump J.' });
    expect(resp.status).toEqual(200);
    expect(resp.body.name).toEqual('Trump J.');
  });

  it(' POST /presidents should add new president', async () => {
    const resp = await request(app).post('/presidents').send({
      name: 'Clinton',
      start: '1993',
      final: '2001',
    });

    expect(resp.status).toEqual(200);
    expect(resp.body.name).toEqual('Clinton');
    expect(resp.body.start).toEqual('1993');
    expect(resp.body.final).toEqual('2001');
    expect(resp.body.id).not.toBeUndefined();
  });
  afterAll(() => {
    pool.end();
  });
});
