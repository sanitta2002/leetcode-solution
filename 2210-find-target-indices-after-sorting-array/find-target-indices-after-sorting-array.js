/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var targetIndices = function(nums, target) {
      let array=[]
    let num=nums.sort((a,b)=>a-b)
    for(var i=0;i<num.length;i++)
    {
        if(num[i]===target)
        {
            array.push(i)
        }
    }
    return array
};