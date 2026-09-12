/**
 * @param {string} s
 * @return {string}
 */
var reverseOnlyLetters = function(s) {
   let a = []
   for(let ch of s){
    if ((ch >= 'a' && ch <= 'z') || 
            (ch >= 'A' && ch <= 'Z')) {
            a.push(ch);
        }
   }
   a.reverse()


    let i = 0;
    let result = "";
    for (let ch of s) {
        if ((ch >= 'a' && ch <= 'z') || 
            (ch >= 'A' && ch <= 'Z')) {
            result += a[i++];
        } else {
            result += ch;
        }
    }

    return result;
};