/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
    let ex=[...heights].sort((a,b)=>a-b)
    let count=0
    for(i=0;i<heights.length;i++){
        if(heights[i]!==ex[i]){
            count++
        }
    }
    return count
};