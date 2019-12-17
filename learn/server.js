const express = require("express");
const static = require("express-static");
const cookieParser = require("cookie-parser");
const cookieSession = require("cookie-session");
const bodyParser = require("body-parser");
const route = require("express-route");
const consolidate = require("consolidate");
const mysql = require('mysql');
const multer = require('multer');
const multerObj = multer({dest:'./static/upload'})

var server = express();
server.listen(3000);


//1.获取请求数据
//get自带
server.use(bodyParser.urlencoded());
server.use(multerObj.any());
//2.cookie  和session
server.use(cookieParser());
( function (){
    var keys = [];
    for(let i=0;i<100000;i++){
        keys[i] = 'a_'+Math.random();
    }
    server.use(cookieSession({
        name:'sess_id',
        keys:keys,
        maxAge: 20*60*1000
    }));
})()

//3.模板
server.engine('html',consolidate.ejs);
server.set('views','template');
server.set('view engine','html');

//4.route
server.use('/',require('./route/web')());
server.use('/admin/',require('./route/admin')());


//5.default : static
// server.use(static('./static/'));
