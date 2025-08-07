/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let temp
     for(var i=0;i<nums.length;i++)
    {
        for(var j=i+1;j<nums.length;j++)
        {
            if(nums[i]==0)
        {
            temp=nums[i]
            nums[i]=nums[j]
            nums[j]=temp

        }

        }
        
        
    }
    return nums
};