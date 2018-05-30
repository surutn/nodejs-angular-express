var express = require('express');

exports.get = function(req, res, next) {
    res.setHeader('Content-Type','text/plain');
    res.end('Hello World - farm');
  };
  