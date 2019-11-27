const http=require("http");
const urlLib = require("url");

http.createServer((req,res)=>{
    var obj= urlLib.parse(req.url,true);
    
    var url =obj.pathname;
    var GET=obj.query;
    console.log(url,GET);
}).listen(3001)