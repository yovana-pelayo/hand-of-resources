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
  .get('/', async (req, res, next) => {
    try {
      const data = await God.getAll();
      console.log('data', data);
      res.json(data);
    } catch (e) {
      next(e);
    }
  });
