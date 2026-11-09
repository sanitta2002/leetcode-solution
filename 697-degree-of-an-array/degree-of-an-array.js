/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function(nums) {
    let map ={}
    let first={}
    let last={}
    let degree=0
    for(let i=0;i<nums.length;i++){
        let num=nums[i]
        if(map[num]===undefined){
            map[num]=0
            first[num]=i
        }
        map[num]++
        last[num]=i
        degree = Math.max(degree, map[num])
    }
    let min=nums.length
    for(let num in map){
        if(map[num]===degree){
            min=Math.min(min,last[num]-first[num]+1)
        }
    }
    return min
};