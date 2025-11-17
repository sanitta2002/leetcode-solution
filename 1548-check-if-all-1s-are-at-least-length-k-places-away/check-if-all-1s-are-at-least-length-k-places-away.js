/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var kLengthApart = function(nums, k) {
    let prev=-k-1
    for(i=0;i<nums.length;i++){
        if(nums[i]===1){
            if(i-prev-1<k){
               
               return false
            }
            prev=i
        }
        
    }
    return true
    
    
};