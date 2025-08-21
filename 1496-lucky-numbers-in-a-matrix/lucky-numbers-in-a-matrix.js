/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var luckyNumbers = function(matrix) {
    let row=matrix.map(r=>Math.min(...r))
    let col=matrix[0].map((_,j)=>Math.max(...matrix.map(r=>r[j])))
   
     let res=[]
     for(i=0;i<matrix.length;i++){
        for(j=0;j<matrix[0].length;j++){
            if(matrix[i][j]===row[i] && matrix[i][j]===col[j]){
                res.push(matrix[i][j])
            }
        }
     }
       return res

};