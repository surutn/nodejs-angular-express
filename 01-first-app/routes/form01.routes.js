var express = require('express');
var router = express.Router();


var form01 = require('../controllers/form01.controller');

router.get('/', form01.render);


module.exports = router;
