/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function(s) {
    let abcount=0
    let latecount=0
    for(let char of s){
        if(char=='A'){
            abcount++
            if(abcount>1){
                return false
                
            }
            latecount=0
        }
        else if(char==='L'){
            latecount++
            if(latecount>=3){
                return false
            }
        }else{
            latecount=0
        }
    }
    return true
};