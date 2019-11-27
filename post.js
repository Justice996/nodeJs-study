const http = require('http');
const querystring = require('querystring');

http.createServer((req,res)=>{
    //接收post请求数据 post很大--分段

    //data有一段数据到达(很多次)
    var str='';
    var i=0;
    req.on('data',(data)=>{
       console.log(`这是第${i++}次收到数据`);
       
         str+=data
    });
    //end数据全部到达(只会发生一次)
    req.on('end',()=>{
        var POST = querystring.parse(str);

       console.log(POST);
       
    });
}).listen("3000");