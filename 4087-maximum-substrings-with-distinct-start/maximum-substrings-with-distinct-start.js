/**
 * @param {string} s
 * @return {number}
 */
var maxDistinct = function(s) {
   let obj={}
    for(let i=0;i<s.length;i++){
        if(obj[s[i]]){
            obj[s[i]]++
        }else{
            obj[s[i]]=1
        }
    }
    let count=0
    for(let key in obj){
        if(obj[key]===obj[key]){
            count++
        }
    }
    return count
};