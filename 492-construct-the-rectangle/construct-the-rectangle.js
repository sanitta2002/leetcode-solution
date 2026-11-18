/**
 * @param {number} area
 * @return {number[]}
 */
var constructRectangle = function(area) {
    let w = Math.floor(Math.sqrt(area))
    while(area%w!==0){
        w--
    }
    let len = area/w
    return [len,w]
};