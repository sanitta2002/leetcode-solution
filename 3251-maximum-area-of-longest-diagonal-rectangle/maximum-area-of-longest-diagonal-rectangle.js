/**
 * @param {number[][]} dimensions
 * @return {number}
 */
var areaOfMaxDiagonal = function(dimensions) {
    let maxdi=0
    let maxAr=0
    for(let [w,h] of dimensions  ){
        let di=w*w+h*h
        let area=w*h
        if(di>maxdi){
            maxdi=di
            maxAr=area
        }else if(di===maxdi){
            maxAr=Math.max(maxAr,area)
        }
    }
    return maxAr
};