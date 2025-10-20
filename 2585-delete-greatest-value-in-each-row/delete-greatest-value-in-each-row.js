/**
 * @param {number[][]} grid
 * @return {number}
 */
var deleteGreatestValue = function(grid) {
    for(i=0;i<grid.length;i++){
        grid[i].sort((a,b)=>a-b)
    }
    let a=0
    let col=grid[0].length
    for(i=col-1;i>=0;i--){
        let val=0
        for(j=0;j<grid.length;j++){
            if(grid[j][i]>val){
                val=grid[j][i]
            }
        }
        a+=val
    }
    return a
};