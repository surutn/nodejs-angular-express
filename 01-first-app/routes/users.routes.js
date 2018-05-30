var express = require('express');
var router = express.Router();

/* GET users listing. */
//router.get('/', function(req, res, next) {
//  res.send('respond with a resource');
//});

var users = require('../controllers/users.controller');

router.get('/', users.send);

module.exports = router;
