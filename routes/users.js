var express = require('express');
var router = express.Router();
var userModel = require("../models/user")

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json(userModel);
});


/* POST create new user */
router.post('/', function(req, res, next){
  console.log(req.body);
});

module.exports = router;
