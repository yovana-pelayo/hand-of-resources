const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('god routes', () => {
  beforeEach(() => {
    return setup(pool);
  });
  it('get /gods should display a list of gods', async () => {
    const resp = await request(app).get('/gods');
    expect(resp.status).toEqual(200);
    expect(resp.body).toEqual([
      {
        drink: 'Iced American (no sugar)',
        id: '1',
        known: 'Lord of Justice',
        name: 'Zeus',
      },
      {
        drink: 'Espresso shot',
        id: '2',
        known: 'Known as Neptune',
        name: 'Poseidon',
      },
      {
        drink: 'Hot Oatmilk Latte',
        id: '3',
        known: 'Goddess of wisdom, war and the crafts',
        name: 'Athena',
      },
      { drink: 'Iced Mocha', id: '4', known: 'Most Loved God', name: 'Apollo' },
    ]);
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
  it('PUT /gods/:id should update/ edit reptile', async () => {
    const resp = await (
      await request(app).put('/gods/2')
    ).setEncoding({ drink: 'Espresso Shots on the Rocks' });
    expect(resp.status).toEqual(200);
    expect(resp.body.drink).toEqual('Espresso Shots on the Rocks');
  });
  afterAll(() => {
    pool.end();
  });
});
