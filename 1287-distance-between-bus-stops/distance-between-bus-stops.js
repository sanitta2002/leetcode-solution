/**
 * @param {number[]} distance
 * @param {number} start
 * @param {number} destination
 * @return {number}
 */
var distanceBetweenBusStops = function(distance, start, destination) {
    let res = 0;
    let total = 0;

    for (let d of distance) total += d;

    let s = Math.min(start, destination);
    let e = Math.max(start, destination);

    for (let i = s; i < e; i++) {
        res += distance[i];
    }

    return Math.min(res, total - res);
};