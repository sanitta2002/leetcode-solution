/**
 * @param {string} s
 * @return {number}
 */
var numSub = function(s) {
    let res=0
    let count=0
    for(i=0;i<s.length;i++){
        if(s[i]==='1'){
            count++
        }else{
             res+=(count*(count+1))/2
            count=0
        }

    }
    res+=(count*(count+1))/2
    let a=(10**9)+7
    return res%a
    
};