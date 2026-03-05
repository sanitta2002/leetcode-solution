/**
 * @param {string} s
 * @return {number}
 */
var minOperations = function(s) {
    let countA=0
    let countB=0
    for(let i=0;i<s.length;i++){
       if(i%2===0){
        if(s[i]!=='0') countA++
        if(s[i]!=='1') countB++
       }else{
         if(s[i]!=='1') countA++
        if(s[i]!=='0') countB++ 
       }
    }
    return Math.min(countA ,countB)
};