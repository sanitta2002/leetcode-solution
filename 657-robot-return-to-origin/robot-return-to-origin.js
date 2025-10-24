/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
    let left=0
    let right=0
    for(i=0;i<moves.length;i++){
        if(moves[i]==='R'){
           right++
        }else if(moves[i]==='L'){
            right--
        }else if(moves[i]==='U'){
            left++
        }else if(moves[i]==='D'){
            left--
        }
    }
    if(left===0 && right===0){
        return true
    }
    return false
    
};