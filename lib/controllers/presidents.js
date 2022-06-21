const { Router } = require('express');
const { President } = require('../models/President');

module.exports = Router().get('/', async (req, res, next) => {
  try {
    const data = await President.getAll();
    res.json(data);
  } catch (e) {
    next(e);
  }
});
