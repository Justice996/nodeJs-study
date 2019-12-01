const express = require('express');
const  expressStatic = require('express-static');
const bodyParser = require('body-parser');
//创建服务
var server = express();

// res req 非侵入式 (增强)保留了原生的功能,又新增了其他的功能(例如send)

server.use(bodyParser.urlencoded({
   extended : true,   //扩展模式
   limit :    2*1024*1024     //限制2M
}));

//三种方法处理请求 get post use  ('/',function(){})
server.use('/', (req,res)=>{
   console.log(req.body);//POST
   // console.log(req.query);//GET
   res.send({a:1,b:2});
//    res.write({a:1,b:2}); 会报错
   res.end();
});
server.listen(3000);

//req.query get
//req.body post