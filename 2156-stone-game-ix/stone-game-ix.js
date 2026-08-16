/**
 * @param {number[]} stones
 * @return {boolean}
 */
var stoneGameIX = function(stones) {
    let count = [0, 0, 0];
    for(let num of stones){
        count[num%3]++
    }
   let zero = count[0];
    let one = count[1];
    let two = count[2];
    if (zero % 2 === 0) {
        return one > 0 && two > 0;
    }
    return Math.abs(one - two) > 2;
};