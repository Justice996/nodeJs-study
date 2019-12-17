const crypto = require('crypto');

module.exports = {
    MD5_SUFFIX: "sdghnaeoijgfac为当前就哦啊大家哦啊大家安oisfadwaoedfawfhiusrd",
    md5:function(str){
        /*
        *加密方法
        */
        var obj =crypto.createHash('md5');
        obj.update(str);
        return obj.digest('hex');
    }
}