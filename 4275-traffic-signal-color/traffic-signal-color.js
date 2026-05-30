/**
 * @param {number} timer
 * @return {string}
 */
var trafficSignal = function(timer) {
    if(timer===0){
       return "Green"
    }else if(timer===30){
        return "Orange"
    }else if(30 < timer && timer <=90){
        return "Red"
    }else{
        return "Invalid"
    }
};