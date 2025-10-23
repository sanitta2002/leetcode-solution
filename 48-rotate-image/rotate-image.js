/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
   
    for(i=0;i<matrix.length;i++){
        for(j=i;j<matrix.length;j++){
            [matrix[i][j],matrix[j][i]]=[matrix[j][i],matrix[i][j]]
        }
    }
    for(i=0;i<matrix.length;i++){
        matrix[i].reverse()
    }
    return matrix
};