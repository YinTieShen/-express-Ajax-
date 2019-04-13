var express = require('express');
var router = express.Router();

/* GET home page. */
//网站路由
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/pubu',function(req,res,next){
  res.render('pubu');
})
router.get('/waterfall',function(req,res,next){
  res.render('waterfall');
})

router.get('/data',function(req,res,next){
  var data = [
      {id:1,src:"/images/1.jpg",des:"竹林"},
      {id:2,src:"/images/2.jpg",des:"建筑"},
      {id:3,src:"/images/3.jpg",des:"花"},
      {id:4,src:"/images/4.jpg",des:"古迹"},
      {id:5,src:"/images/5.jpg",des:"小桥"},
      {id:6,src:"/images/6.jpg",des:"花"},
      {id:7,src:"/images/7.jpg",des:"动漫"},
      {id:8,src:"/images/8.jpg",des:"树林"},
      {id:9,src:"/images/9.jpg",des:"建筑"},
      {id:10,src:"/images/10.jpg",des:"红花"}
  ];
  res.json(data);


})


module.exports = router;
