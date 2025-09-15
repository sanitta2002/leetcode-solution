/**
 * @param {string} text
 * @param {string} brokenLetters
 * @return {number}
 */
var canBeTypedWords = function(text, brokenLetters) {
    let count=0
    let word=text.split(' ')
    for(let char of word){
        if(!char.split('').some(c=>brokenLetters.includes(c))){
            count++
        }
    }
    return count
};