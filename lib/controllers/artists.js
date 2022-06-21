const { Router } = require('express');
const { Artist } = require('../models/Artist');

module.exports = Router()
  .get('/', async (req, res, next) => {
    try {
      const data = await Artist.getAll();
      res.json(data);
    } catch (e) {
      next(e);
    }
  })
  .post('/', async (req, res, next) => {
    try {
      const data = await Artist.insert(req.body);
      res.json(data);
    } catch (e) {
      next(e);
    }
  });
