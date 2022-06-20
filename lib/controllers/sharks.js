const { Router } = require('express');
const { Shark } = require('../models/Shark');

module.exports = Router().get('/', async (req, res, next) => {
  try {
    const data = await Shark.getAll();
    res.json(data);
  } catch (e) {
    next(e);
  }
});
