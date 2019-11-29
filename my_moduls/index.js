exports.function() {
    var res=0;
    for (let i = 0; i < arguments.length; i++) {
        res+="这里有"+arguments[i]+"个浩浩";
        
    }
    return res;
}