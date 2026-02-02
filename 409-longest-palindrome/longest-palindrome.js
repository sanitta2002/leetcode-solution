/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    let a= new Set()
    let l=0
    for(let n of s){
        if(a.has(n)){
            l+=2
            a.delete(n)
        }else{
            a.add(n)
        }
    }
    if(a.size>0){
       return l+1
    }else{
       return l
    }
};