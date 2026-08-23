/**
 * @param {string} seq
 * @return {number[]}
 */
var maxDepthAfterSplit = function(seq) {
    let ans = [];
    let depth = 0;

    for (let ch of seq) {

        if (ch === '(') {
            depth++;

            ans.push(depth % 2);
        } else {
            ans.push(depth % 2);

            depth--;
        }
    }

    return ans;
};