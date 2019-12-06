const express= require('express');

var server = express();

var routeUser = express.Router();

routeUser.get('/1.html',(req,res)=>{
    res.send("user1");
});

routeUser.get('/2.html',(req,res)=>{
    res.send("user222");
});

server.use('/user',routeUser)
server.listen(3000);