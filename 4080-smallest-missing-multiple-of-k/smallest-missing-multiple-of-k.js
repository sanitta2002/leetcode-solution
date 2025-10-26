/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var missingMultiple = function(nums, k) {
     let i=1
       while(true){
         let a=i*k
        if(!nums.includes(a)){
           return a
        }
        i++
  }
    
};