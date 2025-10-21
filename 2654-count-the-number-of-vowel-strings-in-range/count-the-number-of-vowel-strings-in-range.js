/**
 * @param {string[]} words
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var vowelStrings = function(words, left, right) {
    let count=0
    let w=['a','e','i','o','u']
    for(i=left;i<=right;i++){
        if(w.includes(words[i][0]) && w.includes(words[i][words[i].length-1])){
            count++
        }
    }
      
        return count

};