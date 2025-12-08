/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let count=0
   for(i=0;i<t.length;i++){
    if(s[count]===t[i]){
        count++
    }
   }
  return count===s.length
};