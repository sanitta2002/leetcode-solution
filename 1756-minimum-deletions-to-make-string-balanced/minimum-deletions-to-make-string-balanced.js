/**
 * @param {string} s
 * @return {number}
 */
var minimumDeletions = function(s) {
    let res=0
    let count=0
    for(i=0;i<s.length;i++){
        if(s[i]==='b'){
            count++
        }else{
            res=Math.min(res+1,count)
        }
    }
    return res
};