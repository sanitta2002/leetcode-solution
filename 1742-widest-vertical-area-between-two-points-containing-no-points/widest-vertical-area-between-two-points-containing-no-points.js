/**
 * @param {number[][]} points
 * @return {number}
 */
var maxWidthOfVerticalArea = function(points) {
    let a= points.map(point => point[0]);
    a.sort((a, b) => a - b);
     let maxGap = 0;
     for(let i=1;i<a.length;i++){
        let gap=a[i]-a[i-1]
         maxGap =Math.max(maxGap,gap)
     }
     return maxGap
};