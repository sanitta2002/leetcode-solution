/**
 * @param {string} s
 * @return {number}
 */
var numSub = function(s) {
    let res=0
    let count=0
    let mod = 1000000007;
    for(i=0;i<s.length;i++){
        if(s[i]==='1'){
            count++
        }else{
            res=(res+(count*(count+1)/2))%mod
            count=0
        }

    }
    res=(res+(count*(count+1)/2))%mod
    return res
    
};