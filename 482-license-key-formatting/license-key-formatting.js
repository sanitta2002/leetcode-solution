/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var licenseKeyFormatting = function(s, k) {
    s=s.split('-').join('').toUpperCase()
    let result=''
    let count=0
    for(let i=s.length-1;i>=0;i--){
        result=s[i]+result
        count++
        if(count===k && i!==0){
            result='-'+result
            count=0
        }
    }
    return result
    
};