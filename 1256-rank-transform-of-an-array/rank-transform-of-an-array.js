/**
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function(arr) {
    let array=[...new Set([...arr].sort((a,b)=>a-b))]

   let rankMap={}

   for(var i=0;i<array.length;i++)
   {
    rankMap[array[i]]=i+1
   }
   let rank=[]

   for(var i=0;i<arr.length;i++)
   {
    rank.push(rankMap[arr[i]])
   }
   return rank
};