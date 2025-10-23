/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function(word, ch) {
    let a=word.indexOf(ch)
    let b=word.slice(0,a+1)
    let d=word.slice(a+1,word.length)
    let c=b.split('').reverse().join('')
    return c+d
};