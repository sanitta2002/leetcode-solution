/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isGood = function(nums) {
    let n=nums.length
    let set=new Set()
    let count=0
    for(let num of nums){
        if(num<1 || num>n-1) {
            return false
        }
        if(num===n-1){
            count++
        }
        set.add(num)
    }
    return set.size===n-1 && count===2
};