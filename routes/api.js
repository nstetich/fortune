'use strict';

var express = require('express');
var router = express.Router();
var child_process = require('child_process');
var Q = require('q');

/* GET users listing. */
router.get('/fortune', function(req, res) {
  Q.nfcall(child_process.exec, 'fortune')
    .then(function (stdout) {
      res.status(200).send({fortune: stdout[0]});
    }).catch(function (error) {
      res.status(500).send({error: error});
    });
});

module.exports = router;
