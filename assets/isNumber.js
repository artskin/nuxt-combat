var isNumber = function(num){
    if(!isNaN(num)){
        return num;
    }else{
        return "not number";
    }
}
module.exports = isNumber;