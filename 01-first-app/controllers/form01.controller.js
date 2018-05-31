var express = require('express');

exports.render = function (req, res, next) {
  res.render('form01', {
    pageTitle: 'Form 01',
    title: 'Jade',
    yourAreUsingJade:true
  });
};