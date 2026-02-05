/**
 * @param {number[]} nums
 * @return {number[]}
 */
var constructTransformedArray = function(nums) {
    let n=nums.length
    let res=new Array(n)
    for(let i=0;i<n;i++){
        let newIn=((i+nums[i])%n+n)%n
        res[i]=nums[newIn]
    }
    return res
};