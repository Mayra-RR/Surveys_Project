var express = require('express');
var router = express.Router();

var users = [];

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* POST users listing. */
router.post('/add', function(req, res, next) {
  users.push(req.body);
  res.send(users)
});


module.exports = router;
