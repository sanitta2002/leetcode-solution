/**
 * @param {number[][]} matrix
 * @return {number}
 */
var maxMatrixSum = function(matrix) {
    let sum=0
    let negCount=0
    let min=Infinity
    for(let i=0;i<matrix.length;i++){
        for(let j=0;j<matrix[i].length;j++){
            let val = matrix[i][j];
            if(val<0) negCount++
                sum+=Math.abs(val)
                min =Math.min(min,Math.abs(val))
            
        }
    }
    if(negCount%2===1){
        sum-=2*min
    }
    return sum
};