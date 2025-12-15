/**
 * @param {string} s
 * @return {number}
 */
var maxScore = function(s) {
    let leftZero=0
    let rightOne=0
    let max=0
       for(let one of s){
        if(one==='1'){
            rightOne++
        } 
    }
    for(let i=0;i<s.length-1;i++){
        if(s[i]==='0'){
            leftZero++
        }else{
            rightOne--
        }
        max=Math.max(max,rightOne+leftZero)
    }
    return max
    
};