var express = require('express');
var router = express.Router();

var index = require('../controllers/farm.controller');

router.get('/', index.get);


module.exports = router;