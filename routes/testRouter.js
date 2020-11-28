const express = require('express');

const router = express.Router();

router.get('/test', (req, res) => {
  res.status(200);
  res.send('API get is working properly!');
});

router.get('/test', (req, res) => {
    res.status(200);
    res.send('API is working properly!');
  });

module.exports = router;