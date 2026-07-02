/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    intervals.sort((a,b)=>a[0]-b[0])
    const result =[]
    for(let a of intervals){
        if(result.length===0 || result[result.length-1][1]<a[0]){
            result.push(a)
        }else{
            result[result.length-1][1] = Math.max(result[result.length-1][1],a[1])
        }
    }
    return result
};