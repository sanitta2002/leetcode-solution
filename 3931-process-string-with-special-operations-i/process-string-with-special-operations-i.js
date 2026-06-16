/**
 * @param {string} s
 * @return {string}
 */
var processStr = function(s) {
  let res = [];

    for (let ch of s) {
        if (ch >= 'a' && ch <= 'z') {
            res.push(ch);
        } else if (ch === '*') {
            if (res.length > 0) {
                res.pop();
            }
        } else if (ch === '#') {
            res.push(...res);
        } else if (ch === '%') {
            res.reverse();
        }
    }

    return res.join('');
};