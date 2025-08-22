/**
 * @param {number[][]} grid
 * @return {number}
 */
var minimumArea = function(grid) {
    let row=grid.length
    let col=grid[0].length
     
     let minRow =row
     let minCol =col
     let maxRow = -1;
     let maxCol = -1;
    for(i=0;i<row;i++){
        for(j=0;j<col;j++){
          if(grid[i][j]===1){
              minRow=Math.min(minRow,i)
              maxRow=Math.max(maxRow,i)
              minCol=Math.min(minCol,j)
              maxCol=Math.max(maxCol,j)
          }
        }
    }
    if(maxRow===-1) return 0
    let h=maxRow-minRow+1
    let w=maxCol-minCol+1
    return(h*w)
};