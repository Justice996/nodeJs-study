const express = require('express');
const cookieParser = require("cookie-parser");
const cookieSession = require("cookie-session");
var server=express();

server.use(cookieParser());

var arr=[];
for (let i = 0; i < 10000; i++) {
    arr.push('sig_'+Math.random());
}


//cookie
server.use(cookieSession({
    keys : arr,
    name:'sees',
    maxAge:  24*3600*1000
}));

server.use('/',(req,res)=>{
  console.log(req.session);
  if(req.session['count']==null){
     req.session['count']=1
  }else{
    req.session['count']++
  }
  console.log( req.session['count']);
  
    res.end('ok11');
});
server.listen(3000);