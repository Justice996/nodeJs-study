const express = require('express');
const cookieParser = require("cookie-parser");
var server=express();

server.use(cookieParser());
//cookie
server.use('/',(req,res)=>{
   
    req.secret='dvsgsgdsgbf';
    res.cookie('user', 'sherry', {path:'/aaa',maxAge: 30*24*3600*1000,signed:true});
    console.log(req.signedCookies);
    console.log(req.cookies);
    res.send('ok');
    
});
server.listen(3000);