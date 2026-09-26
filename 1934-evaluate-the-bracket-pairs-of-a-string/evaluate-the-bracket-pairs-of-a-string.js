/**
 * @param {string} s
 * @param {string[][]} knowledge
 * @return {string}
 */
var evaluate = function(s, knowledge) {
      let map = new Map(knowledge)
    let result = ""

    for (let i = 0; i < s.length; i++) {

        if (s[i] === "(") {
            let j = i + 1

            while (s[j] !== ")") {
                j++
            }

            let key = s.slice(i + 1, j)

            result += map.get(key) || "?"

            i = j
        } else {
            result += s[i]
        }
    }

    return result;
};