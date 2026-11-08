/**
 * @param {number[][]} grid
 * @return {number}
 */
var countServers = function(grid) {
    let count=0
    for(let i=0;i<grid.length;i++){
        for(let j=0;j<grid[0].length;j++){
            if(grid[i][j]===1){
                let row=0
                let col=0
                 for (let k = 0; k < grid[0].length; k++) {
                    row += grid[i][k]
                }
                 for (let k = 0; k < grid.length; k++) {
                    col += grid[k][j]
                }
                if (row > 1 || col > 1) {
                    count++
                }
            }
        }
    }
    return count

};