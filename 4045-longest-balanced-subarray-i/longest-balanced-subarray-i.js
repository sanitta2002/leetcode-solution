/**
 * @param {number[]} nums
 * @return {number}
 */
var longestBalanced = function(nums) {
    let max=0
    for(let i=0;i<nums.length;i++){
        let even=new Set()
        let odd=new Set()
        for(let j=i;j<nums.length;j++){
            if(nums[j]%2===0){
                even.add(nums[j])
            }else{
                odd.add(nums[j])
            }
            if(even.size===odd.size){
                max=Math.max(max,j-i+1)
            }
        }
    }
    return max
};