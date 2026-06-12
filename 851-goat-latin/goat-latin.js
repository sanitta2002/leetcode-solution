/**
 * @param {string} sentence
 * @return {string}
 */
var toGoatLatin = function(sentence) {
    let vowels = new Set(['a', 'e', 'i', 'o', 'u','A', 'E', 'I', 'O', 'U'])
    let words = sentence.split(' ');
    let result = [];
    for (let i = 0; i < words.length; i++) {
        let word = words[i];

        if (vowels.has(word[0])) {
            word = word + "ma";
        } else {
            word = word.slice(1) + word[0] + "ma";
        }

        word += "a".repeat(i + 1);
        result.push(word);
    }

    return result.join(' ');

                            
};