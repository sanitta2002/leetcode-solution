/**
 * @param {number[][]} grid
 * @return {boolean}
 */
var canPartitionGrid = function(grid) {
    let m=grid.length
    let n=grid[0].length
    let total=0
    for(let i=0;i<m;i++){
        for(let j=0;j<n;j++){
            total+=grid[i][j]
        }
    }
    if(total%2!==0) return false
    let target=total/2
    let rowSum=0
    for(let i=0;i<m-1;i++){
        for(let j=0;j<n;j++){
            rowSum+=grid[i][j]
        }
        if(rowSum===target) return true
    }
    let clmSum=0
    for(let i=0;i<n-1;i++){
        for(let j=0;j<m;j++){
            clmSum+=grid[j][i]
        }
        if(clmSum===target) return true
    }
 return false
};