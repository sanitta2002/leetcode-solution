/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
    while(stones.length>1){
        stones.sort((a,b)=>b-a)
        let x=stones[0]
        let y=stones[1]
         stones.splice(0,2)
        if(y!==x){
            stones.push(x-y)
        }
    }
   return  stones.length===0 ? 0 :stones[0]
};