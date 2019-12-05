const jade = require('jade');

var str = jade.renderFile('./views/test.jade',{pretty:true});
console.log(str);
