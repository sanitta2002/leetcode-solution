/**
 * @param {string} s
 * @return {number}
 */
var longestBalanced = function(s) {

   let maxLen = 0;

    for (let i = 0; i < s.length; i++) {

        let freq = new Array(26).fill(0);

        for (let j = i; j < s.length; j++) {

            freq[s[j].charCodeAt(0) - 97]++;

            let set = new Set();

            for (let k = 0; k < 26; k++) {
                if (freq[k] > 0) {
                    set.add(freq[k]);
                }
            }

            if (set.size === 1) {
                maxLen = Math.max(maxLen, j - i + 1);
            }
        }
    }

    return maxLen;
};