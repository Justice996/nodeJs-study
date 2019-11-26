//文件操作 引入文件操作模块
const fs=require('fs')

//读取文件 readFile(文件名,回调函数) 异步操作,回调函数返回状态
//异步 多个操作同时进行
//同步 一次一个
// fs.readFile('test.txt',function(err,data){
    
//     if(err){
//         console.log("读取失败");
//     }else{
//         console.log(data.toString());
        
//     }
// })

//写入文件writeFile(文件名,写入内容,回调函数) 异步操作,回调函数返回状态
fs.writeFile("b.txt","这是我写入的",function(err){
    console.log(err);
})
