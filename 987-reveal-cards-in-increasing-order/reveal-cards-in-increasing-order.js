/**
 * @param {number[]} deck
 * @return {number[]}
 */
var deckRevealedIncreasing = function(deck) {
    deck.sort((a,b)=>a-b)
    let arr=[]
    for(let i=deck.length-1;i>=0;i--){
        if(arr.length>0){
            arr.unshift(arr.pop())
        }
        arr.unshift(deck[i])
    }
    return arr
};