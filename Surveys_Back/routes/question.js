var express = require('express');
var router = express.Router();

var question = [];

/*http://localhost:3000/hotel*/
/* GET question listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* POST question listing. */
router.post('/add', function(req, res, next) {
  question.push(req.body);
  res.send(question)
});


module.exports = router;
