var express = require('express');

exports.send = function(req, res, next) {
    res.send('respond with a resource');
  };