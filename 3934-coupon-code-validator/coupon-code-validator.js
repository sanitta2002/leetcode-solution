/**
 * @param {string[]} code
 * @param {string[]} businessLine
 * @param {boolean[]} isActive
 * @return {string[]}
 */
var validateCoupons = function(code, businessLine, isActive) {
  let d = ["electronics", "grocery", "pharmacy", "restaurant"],
        ans = [],
        n = code.length, i
    for (i = 0; i < n; i++) {
        if (isActive[i] && d.includes(businessLine[i]) && code[i].match(/^\w+$/))
            ans.push([businessLine[i], code[i]])
    }
    ans.sort()
    return ans.map(e => e[1])
};