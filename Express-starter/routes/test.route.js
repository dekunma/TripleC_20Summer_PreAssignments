var express = require('express');
var router = express.Router();
const Test = require('../controllers/test.controller')

/* test GET request. */
router.get('/', function(req, res, next) {
  res.send("Get successfully")
});

/* Get data stored in collection "test" */
router.get('/api', function(req, res, next) {
    Test.get(req, res)
})

/* Post new data to collection "test" */
router.post('/api', function(req, res, next) {
    Test.post(req, res)
})


module.exports = router;
