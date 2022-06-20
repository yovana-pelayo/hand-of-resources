const { Router } = require('express');
const { God } = require('../models/God');

module.exports = Router()
  .post('/', async (req, res, next) => {
    try {
      const data = await God.insert(req.body);
      res.json(data);
    } catch (e) {
      next(e);
    }
  })

  .put('/:id', async (req, res, next) => {
    try {
      const data = await God.updateById(req.params.id, req.body);
      res.json(data);
    } catch (e) {
      next(e);
    }
  })
  .get('/', async (req, res, next) => {
    try {
      const data = await God.getAll();
      res.json(data);
    } catch (e) {
      next(e);
    }
  });
