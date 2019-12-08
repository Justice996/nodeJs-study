const mysql =require('mysql');

//连接数据库
var db=mysql.createConnection({host:'localhost',user:'root',password:'root',database:'291208'});

db.query("SELECT  * from user",(err,data)=>{
    if(err){
        console.log("出错了",err);
    }else{
        console.log("成功了",JSON.stringify(data));
    }
});
