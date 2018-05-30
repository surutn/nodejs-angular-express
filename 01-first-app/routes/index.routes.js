var express = require('express');
var router = express.Router();

/* GET home page. */
//router.get('/', function(req, res, next) {
//  res.render('index', { title: 'Express' });
//});

var index = require('../controllers/index.controller');

router.get('/', index.render);
router.post('/', index.render);
router.put('/', index.render);
router.delete('/', index.render);
router.all('/', index.render);
router.route('/').get(index.render).post(index.render);

module.exports = router;
