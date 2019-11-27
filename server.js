//引入http模块
const http = require('http');
const fs=require('fs');
//req请求的内容  res返回的内容
//createServer创建服务
var server = http.createServer(function (req, res) {
    var GET={};
    //   console.log("有人");
    // console.log(req.url);
    // switch (req.url) {
    //     case '/1.html':
    //         res.write("111");
    //         break;
    //     case '/2.html':
    //         res.write("222");
    //         break;
    //     case '/3.html':
    //         res.write("333");
    //         break;
    //     default:
    //         res.write('404')
    //         break;
    // }
    //req.url =>'/'
    var file_name = './www'+req.url;
    fs.readFile(file_name,function(err,data) {
        if(err){
            // res.write();
            // 处理接收到的数据  /?user=111&pwd=11
            if(req.url.indexOf('?')!=-1){
                var arr=req.url.split('?');
                var url=arr[0];
               arr2=arr[1].split('&');
              for (let i = 0; i < arr2.length; i++) {
                  var arr3 = arr2[i].split('=');
                  GET[arr3[0]]=arr3[1];
              }
              
            }else{
                var url= req.url;
            }
            console.log(url,GET);
          
        }else{
            res.write(data);
        }
        res.end();//结束请求
    })
});

//监听 端口号  http://localhost:3000/
server.listen(3000);