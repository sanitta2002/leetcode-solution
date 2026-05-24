/**
 * @param {string} s
 * @return {string}
 */
var freqAlphabets = function(s) {
    let result = "";
    let i = 0;

    while (i < s.length) {
        if (i + 2 < s.length && s[i + 2] === '#') {
            let num = Number(s.slice(i, i + 2));
            result += String.fromCharCode(96 + num);
            i += 3;
        } else {
            let num = Number(s[i]);
            result += String.fromCharCode(96 + num);
            i++;
        }
    }

    return result;
};