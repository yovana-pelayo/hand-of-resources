const { Router } = require('express');
const { Zodiac } = require('../models/Zodiac');

module.exports = Router()
  .post('/', async (req, res, next) => {
    try {
      const data = await Zodiac.insert(req.body);
      res.json(data);
    } catch (e) {
      next(e);
    }
  })
  .put('/:id', async (req, res, next) => {
    try {
      const data = await Zodiac.updateById(req.params.id, req.body);
      res.json(data);
    } catch (e) {
      next(e);
    }
  })
  .get('/:id', async (req, res, next) => {
    try {
      const data = await Zodiac.getById(req.params.id, req.body);
      res.json(data);
    } catch (e) {
      next(e);
    }
  })
  .get('/', async (req, res, next) => {
    try {
      const data = await Zodiac.getAll();
      res.json(data);
    } catch (e) {
      next(e);
    }
  });
