const { Router } = require('express');
const { Shark } = require('../models/Shark');

module.exports = Router()
  .delete('/:id', async (req, res, next) => {
    try {
      const data = await Shark.delete(req.params.id);
      res.json(data);
    } catch (e) {
      next(e);
    }
  })
  .post('/', async (req, res, next) => {
    try {
      const data = await Shark.insert(req.body);
      res.json(data);
    } catch (e) {
      next(e);
    }
  })
  .put('/:id', async (req, res, next) => {
    try {
      const data = await Shark.updateById(req.params.id, req.body);
      res.json(data);
    } catch (e) {
      next(e);
    }
  })
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
