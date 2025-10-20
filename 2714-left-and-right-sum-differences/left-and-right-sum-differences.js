/**
 * @param {number[]} nums
 * @return {number[]}
 */
var leftRightDifference = function(nums) {
    let leftSum =[]
    let rightSum=[]
    let res=[]

    for(i=0;i<nums.length;i++){
        let sum=0
        for(j=0;j<i;j++){
            sum=sum+nums[j]
        }
        leftSum.push(sum)
    }
    
    for(i=0;i<nums.length;i++){
        let sum=0
        for(j=i+1;j<nums.length;j++){
          sum=sum+nums[j]
        }
         rightSum.push(sum)   
    }
    
    for(i=0;i<nums.length;i++){
        if(leftSum[i]>rightSum[i]){
            res.push(leftSum[i]-rightSum[i])
        }else{
            res.push(rightSum[i]-leftSum[i])
        }
    }
    return res

};