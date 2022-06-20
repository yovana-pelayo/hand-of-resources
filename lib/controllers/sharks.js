const { Router } = require('express');
const { Shark } = require('../models/Shark');

module.exports = Router()
  .get('/:id', async (req, res, next) => {
    try {
      const data = await Shark.getById(req.params.id, req.body);
      res.json(data);
    } catch (e) {
      next(e);
    }
  })
  .get('/', async (req, res, next) => {
    try {
      const data = await Shark.getAll();
      res.json(data);
    } catch (e) {
      next(e);
    }
  });
