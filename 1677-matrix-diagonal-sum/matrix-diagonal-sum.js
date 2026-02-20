/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function(mat) {
    let sum=0
    let n=mat.length
    for(let i=0;i<n;i++){
         sum+=mat[i][i] 
         if(i!=n-i-1){
            sum+=mat[i][n-i-1] 
         }
        
       
    }
    return sum

}