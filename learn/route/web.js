const express = require('express');

module.exports= function(){
    var router = express.Router();
     router.get('/',  (req,res)=>{
         res.send('这是前台页面').end();

     });
     return router;
};