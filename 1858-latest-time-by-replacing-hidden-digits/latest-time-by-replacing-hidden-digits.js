/**
 * @param {string} time
 * @return {string}
 */
var maximumTime = function(time) {
    let arr=time.split('')
    if(arr[0]==='?'){
        arr[0]=(arr[1]!=='?' && arr[1]>'3') ? '1':'2'
    }
    if(arr[1]==='?'){
        arr[1]=(arr[0]==='2')? '3':'9'
    }
    if(arr[3]==='?'){
        arr[3]='5'
    }
    if(arr[4]=="?"){
        arr[4]='9'
    }
    return arr.join('')
};