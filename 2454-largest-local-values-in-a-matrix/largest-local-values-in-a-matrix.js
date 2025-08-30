/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
var largestLocal = function(grid) {
    let n=grid.length
    let res=[]
    for(i=0;i<n-2;i++){
        let row=[]
        for(j=0;j<n-2;j++){
            let maxVal=0
            for(k=i;k<i+3;k++){
                for(z=j;z<j+3;z++){
                    maxVal=Math.max(maxVal,grid[k][z])
                }
            }   
            row.push(maxVal)
        }
        res.push(row)
    }
    return res
};