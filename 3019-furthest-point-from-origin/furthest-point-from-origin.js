/**
 * @param {string} moves
 * @return {number}
 */
var furthestDistanceFromOrigin = function(moves) {
    let l=0
    let r=0
    let count=0
    for(let i=0;i<moves.length;i++)
    {
        if(moves[i]=='L')
        {
            l++
        }else if(moves[i]=='R'){
            r++
        }else{
            count++
        }
    }
    return Math.abs((l-r))+count
};