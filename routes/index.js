var express = require('express');
var router = express.Router();
var scrambleapi=require('../data/scrambleapi.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});
router.get('/word',function(req,res){
    var word;
    scrambleapi.getAllwords(function(err,item){
           console.log(item);
      res.json(item);
    });
    
});

module.exports = router;
