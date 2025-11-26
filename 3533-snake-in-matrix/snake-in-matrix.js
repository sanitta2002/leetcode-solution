/**
 * @param {number} n
 * @param {string[]} commands
 * @return {number}
 */
var finalPositionOfSnake = function(n, commands) {
    let row=0
    let col=0
    for(i=0;i<=commands.length;i++){
        if(commands[i]==='RIGHT'){
            col++
        }else if(commands[i]==='LEFT'){
            col--
        }else if(commands[i]==='DOWN'){
            row++
        }else if(commands[i]==='UP'){
            row--
        }
    }
    return row*n+col
};