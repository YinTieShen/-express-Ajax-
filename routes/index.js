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

router.get('/data',function(req,res,next){
  var data = [
      {id:1,src:"/images/1.jpg",des:"敢于行动"},
      {id:1,src:"/images/1.jpg",des:"敢于行动"},
      {id:1,src:"/images/1.jpg",des:"敢于行动"},
      {id:1,src:"/images/1.jpg",des:"敢于行动"},
      {id:1,src:"/images/1.jpg",des:"敢于行动"},
      {id:1,src:"/images/1.jpg",des:"敢于行动"},
      {id:1,src:"/images/1.jpg",des:"敢于行动"},
      {id:1,src:"/images/1.jpg",des:"敢于行动"},
      {id:1,src:"/images/1.jpg",des:"敢于行动"},
      {id:1,src:"/images/1.jpg",des:"敢于行动"}
  ];
  res.json(data);


})


module.exports = router;
