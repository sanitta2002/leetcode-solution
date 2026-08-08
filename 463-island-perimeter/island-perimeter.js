/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
    let a=0
    for(let i=0;i<grid.length;i++){
        for(let j=0;j<grid[0].length;j++){
            if(grid[i][j]===1){
                a+=4
                if (i > 0 && grid[i - 1][j] === 1) {
                    a -= 2;
                }
                if (j > 0 && grid[i][j - 1] === 1) {
                    a-= 2;
                }
            }
        }
    }
    return a
};