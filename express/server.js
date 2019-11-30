const express = require('express');
const  expressStatic = require('express-static')
//创建服务
var server = express();

// res req 非侵入式 (增强)保留了原生的功能,又新增了其他的功能(例如send)

//三种方法处理请求 get post use  ('/',function(){})
server.use('/a.html', (req,res)=>{
   res.send({a:1,b:2});
//    res.write({a:1,b:2}); 会报错
   res.end();
});
server.listen(3000);