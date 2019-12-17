const express = require('express');
const common = require('../libs/common');

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
    router.use('/login',  (req,res)=>{
             console.log(req.body);
             

        res.render('admin/login.ejs',{});

    });
     return router;
};