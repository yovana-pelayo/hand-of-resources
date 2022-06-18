const { Router } = require('express');
const { God } = require('../models/Gods');

module.exports = Router().post('/', async (req, res, next) => {
  try {
    const data = await God.insert(req.body);
    console.log('data', data);
    res.json(data);
  } catch (e) {
    next(e);
  }
});
