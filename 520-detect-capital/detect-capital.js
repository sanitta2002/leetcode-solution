/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
    let upper=true
    let lower=true
    let firstUp=true
     for (let i = 0; i < word.length; i++) {
        if (word[i] !== word[i].toUpperCase()) {
            upper = false
        }
        if (word[i] !== word[i].toLowerCase()) {
            lower = false
        }
        if (i > 0 && word[i] !== word[i].toLowerCase()) {
            firstUp = false
        }
    }

    return upper || lower || firstUp
};