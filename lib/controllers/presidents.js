const { Router } = require('express');
const { President } = require('../models/President');

module.exports = Router()
  .get('/', async (req, res, next) => {
    try {
      const data = await President.getAll();
      res.json(data);
    } catch (e) {
      next(e);
    }
  })
  .put('/:id', async (req, res, next) => {
    try {
      const data = await President.updateById(req.params.id, req.body);
      res.json(data);
    } catch (e) {
      next(e);
    }
  });
