/**
 * @param {number[]} height
 * @param {number} threshold
 * @return {number[]}
 */
var stableMountains = function(height, threshold) {
    let arr=[]
    for(let i=1;i<height.length;i++){
        if(height[i-1]>threshold){
            arr.push(i)
        }
    }
    return arr
};