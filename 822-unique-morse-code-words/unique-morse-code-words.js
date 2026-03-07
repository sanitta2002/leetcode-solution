/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
    let s =[".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
  
  let set= new Set()
  for(let w of words){
    let a=''
    for(let c of w){
        a+=s[c.charCodeAt(0)-97]
    }
    set.add(a)
  }
 return set.size
};