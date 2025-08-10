/**
 * @param {number[]} nums
 * @return {number}
 */
var distinctAverages = function(nums) {
    nums.sort((a,b)=>a-b)
    let avg=new Set()
    while(nums.length>0){
        let min=nums.shift()
        let max=nums.pop()
        let sum=(max+min)/2
        avg.add(sum)
    }
    return avg.size
};