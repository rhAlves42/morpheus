const express = require('express');
const fs = require('fs');
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  // let file = fs.readFileSync('./nomes.txt', 'utf8');
  // let names = file.split('\n');
  res.render('names', {names:'teste'})
});

module.exports = router;
