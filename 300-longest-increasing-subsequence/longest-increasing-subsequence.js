/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    let a = []
    for(let num of nums){
        let left=0;
        let right=a.length
        while(left < right){
            const mid = Math.floor((left+right)/2)
            if(a[mid]<num){
                left=mid+1
            }else{
                right=mid
            }
        }
        a[left]=num
    }
    return a.length
};