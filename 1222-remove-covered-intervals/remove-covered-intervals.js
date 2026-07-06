/**
 * @param {number[][]} intervals
 * @return {number}
 */
var removeCoveredIntervals = function(intervals) {
    intervals.sort((a,b)=>{
         if (a[0] === b[0]) {
            return b[1] - a[1];
        }
        return a[0] - b[0];
    })
    let count = 0;
    let maxEnd = 0;

    for (let [start, end] of intervals) {
        if (end > maxEnd) {
            count++;
            maxEnd = end;
        }
    }

    return count;
};