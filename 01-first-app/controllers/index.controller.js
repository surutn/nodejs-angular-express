var express = require('express');

exports.render = function(req, res, next) {
    res.render('index', { title: 'Express' });
  };