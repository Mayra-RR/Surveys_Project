var express = require('express');
var router = express.Router();

var surveys = [];

/*http://localhost:3000/hotel*/
/* GET question listing. */
router.get('/', function(req, res, next) {
  res.send(surveys);
});

/* POST question listing. */
router.post('/add', function(req, res, next) {
  surveys.push(req.body);
  res.send("saved")
});


module.exports = router;
