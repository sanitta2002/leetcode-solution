/**
 * @param {string} s
 * @return {number}
 */
var numberOfSubstrings = function(s) {
    let fre = {a:0,b:0,c:0}
    let left =0
    let ans=0
    for(let i=0;i<s.length;i++){
      fre[s[i]]++
      while(fre.a>0 && fre.b>0 && fre.c>0){
        ans+=s.length-i
        fre[s[left]]--
        left++
      }
    }
    return ans
};