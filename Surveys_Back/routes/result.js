var express = require('express');
var router = express.Router();

var result = [];

/*http://localhost:3000/hotel*/
/* GET result listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* POST result listing. */
router.post('/add', function(req, res, next) {
  result.push(req.body);
  res.send(result)
});


module.exports = router;
