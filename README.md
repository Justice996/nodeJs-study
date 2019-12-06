# nodeJs-study
nodeJs学习  
   1.http模块  
   2.fs模块  
   3.url模块  
   4.querystring模块  


sever2.js 简单的注册登录接口实现
user.html  注册登录前台页面  

 ###模块化
  1. 系统模块:http fs等等
  2. 自定义模块
  3. 包管理器  

常用的模块:
1. crypto 加密
2. events 事件
3. Net 网络操作
4. OS 操作系统信息
5. psth 处理文件路径
6. stream 流操作
7. Timers 定时器
8. ZLIB 压缩

------------------------------------------
自定义模块 
1. 模块组成
2. npm
3. 发布自己的模块

引入自己的模块  可以用./  (不加,必须放在node_modules里面)
对外输出东西必须加给exports(好处:可控制需要输出的东西)

----------------------------------------------------------------------------

对外输出的两种方式
 1. exports.xxx=??  
     exports.xxx=??  
     exports.xxx=??  
  2. module.exports={
    xx:??,
    xx:??,
    xx:??
  }

----------------------------------------------------------------------------
 1. 自己的模块
     * require(用来引入 如果有./,从当前目录查找模块,如果没有./,先从系统模块找,再从node_modules找)
     * module
     * exports
 2. 引入模块
 3. .js可选

 ---------------------------------------------------------------------------npm:NodeJS Package Manager(NodeJS包管理器)
 1. 统一下载途径
 2. 自动下载依赖


 ---------------------------------------------------------------------------
 如何自定义库  
     npm init  初始化
     npm publish  上传
     npm --force unpublish  删除

----------------------------------------------------------------------------

  express框架
  1. 安装
  2. 配置
  3. 接收请求
  4. 响应  

  数据:GET  POST
  中间件:使用,写,链式操作

  GET:无需中间件  req.query
  POST:需要body-parser  

  链式操作
  server.use(function(req,res,next){});  
  next--下一个步骤  

  cookie和session  
  cookie :
    1. cookie空间非常小---省着用
    2. 安全性非常差  
    所以需要注意:
    1. 需要计算空间
    2. 校验cookie是否被篡改过

   - 发送cookie
        res.secret='字符串';
        res.cookie(名字,值,{path:'/',maxAge:毫秒,signed:true});
   - 读取cookie
        cookie-parser  
            server.use(cookieParser('签名'));

           ```javascript
            server.use(function(){
              req.cookies      //未签名版  
              req.signedCookies    //签名版  
            })
            ```

    - 删除cookie
        res.clearCookie(名字)

  --------

  cookie-session
     获取   res.session['xxx']  
     删除   delete res.session['xxx']

  ----
  模板引擎:  用于生成页面
     1. jade -破坏式 侵入式 强依赖
     2. ejs - 温和 非侵入式 弱依赖  

jade:  
  1. 根据缩进划分层级
  2. 属性用()表示,用逗号分隔
      *style={}  
      *class=[]  
  3. 内容  
      div xxx  
          span xxx  
              a(href="xxx')  

  -----------------------------

  jade.render('字符串');
  jade.renderFile('模板文件名',参数)

-----------------------------------------

