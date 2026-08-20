/**
 * @param {number[]} nums
 * @return {number[]}
 */
var resultArray = function(nums) {
    let a = [nums[0]]
    let b = [nums[1]]
    for(let i=2;i<nums.length;i++){
        if(a[a.length-1]>b[b.length-1]){
            a.push(nums[i])
        }else{
            b.push(nums[i])
        }
    }
    return a.concat(b)
};