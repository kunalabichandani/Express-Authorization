const express = require('express');
const router = express.Router();
const passport = require('passport');

router.get('/test', passport.authenticate("jwt", { session: false }), (req, res) => {
  res.status(200);
  res.send('API is working properly!');
});

module.exports = router;
