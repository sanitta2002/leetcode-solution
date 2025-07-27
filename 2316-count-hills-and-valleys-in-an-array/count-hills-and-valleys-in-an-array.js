/**
 * @param {number[]} nums
 * @return {number}
 */
var countHillValley = function(nums) {
    let arr=[]
    for(let i=0;i<nums.length;i++){
       if(nums[i]!==nums[i-1]){
        arr.push(nums[i])
       }
    }
    
    let count=0
    for(let i=1;i<arr.length-1;i++){
        if(arr[i]>arr[i-1] &&arr[i]>arr[i+1]){
            count++
        }else if(arr[i]<arr[i-1] &&arr[i]<arr[i+1]){
            count++
        }
    }
    return count
};