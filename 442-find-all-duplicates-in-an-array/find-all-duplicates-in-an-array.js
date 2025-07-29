/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
   let seen=new Set()
   let dup=new Set()
       nums.filter(e=>{
        if(seen.has(e)){
            dup.add(e)
        }else{
            seen.add(e)
        }
       })
       return [...dup]
};