const express = require('express');
const common = require('../libs/common');
const mysql = require('mysql');

var db =mysql.createPool({host:'localhost',user:'root',password:'root',database:'learn'})
module.exports= function(){
    var router = express.Router();
    router.use((req,res,next)=>{
        console.log(req.url,1111);
        
        if(!req.session['admin_id']&& req.url !='/login'){
            // res.send("近海起啊大法师").end();
             res.redirect('/admin/login')
        }else{
            next();
        }
    });
    //接收到get时直接渲染页面
    router.get('/login',  (req,res)=>{
        res.render('admin/login.ejs',{});
    });
//接收到post请求时处理传过来的数据
    router.post('/login',  (req,res)=>{
             console.log(req.body);
             //接收用户传过来的帐号和密码
              var username =req.body.username;
              var password = common.md5(req.body.password+common.MD5_SUFFIX);
              //去数据库查询
            db.query(`SELECT  * FROM admin_table WHERE username=  '${username}'`,
            (err,data)=>{
                if(err){
                    //数据库连接错误
                    console.log(err);
                    res.status(500).send("database error").end();
                }else{
                  if(data.length==0){
                      //没有查询到这个用户
                      res.status(400).send('no this admin').end();
                  }else{
                      if(data[0].password==password){
                             //验证成功
                             req.session['admin_id']= data[0].ID;
                             res.redirect('/admin/');
                      }else{
                          //密码错误
                          res.status(400).send('this password is incorrect').end();
                      }
                  }
                }
            })
    

    });
    //请求根目录的时候
    router.get('/',  (req,res)=>{
        res.send("登录成功").end();
    });
     return router;
};