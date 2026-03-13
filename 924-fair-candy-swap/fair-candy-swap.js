/**
 * @param {number[]} aliceSizes
 * @param {number[]} bobSizes
 * @return {number[]}
 */
var fairCandySwap = function(aliceSizes, bobSizes) {
    let sumA= aliceSizes.reduce((acc,cur)=>acc+cur,0)
    let sumB = bobSizes.reduce((acc,cur)=>acc+cur,0)
    let dif = (sumB-sumA)/2
    for(let i=0;i<aliceSizes.length;i++){
       for(let j=0;j<bobSizes.length;j++){
         if(aliceSizes[i]+dif===bobSizes[j]){
            return [aliceSizes[i],bobSizes[j]]
         }
       }
    }
};