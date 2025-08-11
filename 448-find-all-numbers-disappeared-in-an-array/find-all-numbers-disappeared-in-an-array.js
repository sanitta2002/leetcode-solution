/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
   let arr=[]
   let res=new Set(nums)
   for(i=1;i<=nums.length;i++){
    if(!res.has(i)){
        arr.push(i)
    }
   }
   return arr
};