const http = require('http');
const fs = require('fs');
const querystring = require('querystring');
const urlLib = require('url');

/*
   写两个接口
   1.注册  user?act=reg&user=xxx&pwd=xxx
   2.登录 user?act=login&user=xxx&pwd=xxx
   返回格式 {"ok":true,"msg":"原因"}
*/
//把接收到的数据存在user这个对象里
var users = {}; //{"sherry","123124"}
var server = http.createServer((req, res) => {
    //解析数据
    var str = "";
    req.on('data', (data) => {
        str += data;
    })
    req.on('end', function() {
        var obj = urlLib.parse(req.url, true);


        const url = obj.pathname;
        const GET = obj.query;
        const POST = querystring.parse(str);
            //区分访问的是文件还是接口
    if(url == "/user") {
        //接口
       switch (GET.act) {
           case 'reg':
               //检查用户名是否存在
              //插入user
              if (users[GET.user]) {
                res.write('{"ok":false,"msg":"此用户已存在"}');
              } else {
                users[GET.user] = GET.pwd;
                res.write('{"ok":true,"msg":"注册成功"}');
              }
               break;
        case 'login':
               //1.检查用户是否存在
               if(users[GET.user]==null){
                res.write('{"ok":false,"msg":"此用户不存在"}');
               }else if(users[GET.user]!=GET.pwd){
                res.write('{"ok":false,"msg":"用户名或密码有误"}');
               }else{
                res.write('{"ok":true,"msg":"恭喜,登录成功"}');
               }
                break;
           default:
               res.write('{"ok":false,"msg":"未知的act"}');
       }
       res.end();
    } else {
        //文件
        //读取文件
        var file_name = './www' + url;
        fs.readFile(file_name, function(err, data){
            if (err) {
                res.write('404');
            } else {
                res.write(data);
            }
            res.end();
        });
    }
    })
}).listen("3000");