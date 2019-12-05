const ejs=require("ejs");

ejs.renderFile('./views/test.ejs',{name:"sherry"},(err,data)=>{
     if(err)
         console.log('编译失败');
    else
        console.log(data);
        
});

