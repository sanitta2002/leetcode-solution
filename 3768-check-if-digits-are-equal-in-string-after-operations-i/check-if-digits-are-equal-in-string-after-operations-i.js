/**
 * @param {string} s
 * @return {boolean}
 */
var hasSameDigits = function(s) {
    while(s.length>2){
        let str=''
        for(i=0;i<s.length-1;i++){
          let a=Number(s[i])
          let b=Number(s[i+1])
          str+=((a+b)%10).toString()
        }
        s=str
    }
    return s[0]===s[1]
};