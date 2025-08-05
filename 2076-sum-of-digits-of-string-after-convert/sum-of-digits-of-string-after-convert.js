/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var getLucky = function(s, k) {
    let str=''
    for(let char of s){
        str+=(char.charCodeAt(0)-96)
    }
    while(k>0){
        let sum=0
        for(let num of str){
            sum+=Number(num)
        }
        str=sum.toString()
        k--
    }
    return parseInt(str)
};