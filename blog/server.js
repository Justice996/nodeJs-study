const express = require("express");
const static = require("express-static");
const cookieParser = require("cookie-parser");
const cookieSession = require("cookie-session");
const bodyParser = require("body-parser");
const multer = require("multer");
const consolidate = require("consolidate");
const mysql = require('mysql');

//连接池
const db=mysql.createPool({host:'localhost',user:'root',password:'root',database:'blog'});
var server =express();

server.listen(3000);

server.use(cookieParser('dwfwiefdnwefwuhdw'));

var arr=[];
for (let i = 0; i < 100000; i++) {
    arr.push('keys_'+Math.random());
};
server.use(cookieSession({name:'',keys:arr,maxAge: 20*3600*1000}));

server.use(bodyParser.urlencoded({extended:false}));
server.use(multer({dest:'./www/upload'}).any());


server.set('view engin','html');

server.set('views','./template');

server.engine('html',consolidate.ejs);

//接收用户请求
server.get('/',(req,res,next)=>{
    //查询轮播图数据
    db.query("select * from banner_table ",(err,data)=>{
        if(err){
              res.status(500).send('database error').end();
        }else{
            res.banners=data;
            //传递数据
            next();
        }
    });
});
server.get('/',(req,res,next)=>{
    //查询新闻列表
    db.query("select ID,title,summary from article_table ",(err,data)=>{
        if(err){
            console.log(err);
            
              res.status(500).send('database error').end();
        }else{
            console.log(data);
             res.articles=data;
             next();
        }
    });
});
server.get('/',(req,res)=>{
    res.render('index.ejs',{banners:res.banners,articles:res.articles});
});
server.get('/article',(req,res)=>{
    //判断是否接收到id
    if(req.query.id){
        db.query("SELECT * from article_table where ID="+req.query.id,(err,data)=>{
            //判断查询是否成功
            if(err){
                res.status(500).send('数据有问题').end();
            }else{
                //判断是否有内容
                if(data.length==0){
                    res.status(404).send('文章不存在').end();
                }else{
                    res.render('conText.ejs',{article_data:data[0]});
                }
            }
        })

    }else{
        res.status(404).send('文章不存在').end();
    }

  
 
   
})

//static数据
server.use(static('./www'));
