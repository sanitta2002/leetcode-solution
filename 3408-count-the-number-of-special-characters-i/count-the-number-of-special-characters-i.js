/**
 * @param {string} word
 * @return {number}
 */
var numberOfSpecialChars = function(word) {
    let lower = new Set();
    let upper = new Set();

    for (let ch of word) {
        if (ch >= 'a' && ch <= 'z') {
            lower.add(ch);
        } else if (ch >= 'A' && ch <= 'Z') {
            upper.add(ch.toLowerCase());
        }
    }

    let count = 0;

    for (let ch of lower) {
        if (upper.has(ch)) {
            count++;
        }
    }

    return count;
};