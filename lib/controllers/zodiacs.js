const { Router } = require('express');
const { Zodiac } = require('../models/Zodiac');

module.exports = Router().get('/', async (req, res, next) => {
  try {
    const data = await Zodiac.getAll();
    res.json(data);
  } catch (e) {
    next(e);
  }
});
